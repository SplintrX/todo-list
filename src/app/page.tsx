'use client'

import TaskInput from '@/components/TaskInput';
import TaskList from '@/components/TaskList';
import { useTasks } from '@/hooks/useTasks'; 

export default function Home() {
  // Usamos el hook 'useTasks' para obtener las tareas, y las funciones para agregar, eliminar, cambiar estado de completado, y contar tareas.
  const { tasks, addTask, deleteTask, toggleTaskCompletion, completedTasksCount, incompleteTasksCount } = useTasks();

  return (
    <>
      {/* Encabezado de la página que muestra el título*/}
      <header 
        className="mb-6 bg-white shadow-md flex flex-col p-4 dark:bg-gray-800 text-black dark:text-white justify-center items-center w-full"
      >
        <h1 className="text-2xl font-bold">Lista de Tareas</h1>
        {/* Mostrar el número de tareas completadas e incompletas */}
        <p className="text-center">Completas {completedTasksCount} | Incompletas {incompleteTasksCount}</p>
        <hr />
      </header>

      {/* Componente para agregar nuevas tareas */}
      <TaskInput addTask={addTask} />

      {/* Contenedor de la lista de tareas */}
      <div className='mb-20'>
        {/* Componente que muestra las tareas, con las funciones para eliminar y cambiar estado de completado */}
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      </div>
    </>
  );
}