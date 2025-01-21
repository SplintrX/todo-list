import { useState, useEffect } from 'react';

// Definición de la interfaz 'Task' para tipar los objetos de tarea:
// - id: identificador
// - text: descripción de la tarea
// - category: cadena para guardar "Personal", "Trabajo" o "Urgente", dependiendo de la tarea
// - completed: indica si la tarea está completada o no
export interface Task {
  id: number;
  text: string;
  category: "Personal" | "Trabajo" | "Urgente";
  completed: boolean;
}

// Este hook permite agregar, eliminar, cambiar el estado de completado y gestionar las tareas almacenadas
export const useTasks = () => {
  // useState se usa para manejar el estado local de las tareas
  const [tasks, setTasks] = useState<Task[]>([]);

  // useEffect se ejecuta una vez cuando el componente se monta.
  // Se cargar las tareas guardadas en el almacenamiento local
  useEffect(() => {
    // Intentamos recuperar las tareas previamente almacenadas en localStorage
    const savedTasks = localStorage.getItem('tasks');
    
    // Si encontramos tareas guardadas, las parseamos desde JSON y las colocamos en el estado.
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);  // [] asegura que este efecto solo se ejecute una vez al iniciar el componente.

  // Este useEffect guarda las tareas en localStorage cada vez que el estado 'tasks' cambia
  useEffect(() => {
    // Guardamos el array de tareas como una cadena JSON en localStorage.
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);  // [tasks] asegura que el efecto se ejecute cada vez que 'tasks' cambie.

  // Función para agregar una nueva tarea al estado 'tasks'.
  // Recibe un objeto 'task' que se agregará al array de tareas.
  const addTask = (task: Task) => {
    setTasks(prevTasks => [...prevTasks, task]);
  };

  // Función para eliminar una tarea del estado 'tasks' usando su 'id'.
  // Filtra el array de tareas para eliminar la tarea cuyo 'id' coincide con el proporcionado.
  const deleteTask = (taskId: number) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  // Función para alternar el estado de completado de una tarea.
  // Recibe el 'id' de la tarea y cambia su valor de 'completed'.
  const toggleTaskCompletion = (taskId: number) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        // Si el 'id' de la tarea coincide con 'taskId' cambiamos el estado 'completed'.
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Calcular el número de tareas completadas.
  // Filtramos las tareas que están marcadas como 'completed' y contamos su longitud.
  const completedTasksCount = tasks.filter(task => task.completed).length;

  // Calcular el número de tareas incompletas.
  // Se obtiene restando el número de tareas completadas al total de tareas.
  const incompleteTasksCount = tasks.length - completedTasksCount;

  // Retornamos todas las funciones y valores que queremos exponer a los componentes que utilicen este hook.
  return {
    tasks,                    // Estado actual de las tareas.
    addTask,                  // Función para agregar una nueva tarea.
    deleteTask,               // Función para eliminar una tarea existente.
    toggleTaskCompletion,     // Función para cambiar el estado de completado.
    completedTasksCount,      // Número de tareas completadas.
    incompleteTasksCount      // Número de tareas incompletas.
  };
};