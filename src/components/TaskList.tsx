import TaskItem from "./TaskItem";  
import { Task } from "@/hooks/useTasks";

interface TaskListProps {
  tasks: Task[];  // Recibimos un array de tareas como prop.
  deleteTask: (taskId: number) => void;  // Función para eliminar tareas
  toggleTaskCompletion: (taskId: number) => void;  // Función para cambiar el estado de completado de la tarea
}

const TaskList = ({ tasks, deleteTask, toggleTaskCompletion }: TaskListProps) => {
  // Ordenamos las tareas por 'id' en orden descendente, las mas recientes primero
  const sortedTasks = [...tasks].sort((a, b) => b.id - a.id);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {/* Usamos un grid responsive, mostrando 1 columna en móviles, 2 en tablets y 3 en pantallas grandes */}
      {sortedTasks.map((task) => (
        // Por cada tarea, renderizamos el componente 'TaskItem' dandole las props que necesite
        <TaskItem
          key={task.id}  // Clave única de la tarea
          task={task}  // Pasamos el objeto de la tarea
          deleteTask={deleteTask}  // Pasamos la función para eliminar tareas
          toggleTaskCompletion={toggleTaskCompletion}  // Pasamos la función para cambiar el estado de completado
        />
      ))}
    </div>
  );
};

export default TaskList;