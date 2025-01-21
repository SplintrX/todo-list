import { FaTrash, FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { Task } from "@/hooks/useTasks";
import { useState } from "react";
import SimpleModal from "./SimpleModal";

interface TaskItemProps {
  task: Task;  // Recibe el objeto tarea
  deleteTask: (taskId: number) => void;  // Función que recibe el id de la tarea para eliminarla
  toggleTaskCompletion: (taskId: number) => void;  // Función para cambiar  el estado de completado
}

const TaskItem = ({ task, deleteTask, toggleTaskCompletion }: TaskItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);  // Estado para controlar la visibilidad del modal

  // Función que abre el modal cuando se hace clic en el botón de eliminar
  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  // Función que se ejecuta cuando se confirma la eliminación de la tarea
  const handleConfirmDelete = () => {
    deleteTask(task.id);
    setIsModalOpen(false);
  };

  // Función para cancelar la eliminación y cerrar el modal
  const handleCancelDelete = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className={`task-item p-4 rounded-lg shadow-lg ${
        task.category === "Personal"
          ? "border-l-8 border-green-500"  // Si la categoría es "Personal" tendra borde verde
          : task.category === "Trabajo"
          ? "border-l-8 border-blue-500"  // Si la categoría es "Trabajo" tendra un borde azul
          : "border-l-8 border-red-500"  // Si la categoría es "Urgente" tendra un borde rojo
      } ${
        task.completed
          ? "bg-gray-200 line-through dark:bg-gray-700 dark:text-gray-400"  // Si la tarea está completada se aplica un fondo gris y se tacha
          : "bg-white dark:bg-gray-800 dark:text-white"
      }`}
    >
      <div className="flex justify-between">
        {/* Muestra el contenido de la tarea */}
        <p className="text-sm">{task.text}</p>
        {/* Botón para eliminar la tarea */}
        <button onClick={handleDeleteClick}>
          <FaTrash className="text-red-500 dark:text-red-400" />
        </button>
      </div>

      <div className="flex justify-between items-center mt-2">
        {/* Botón para cambiar el estado de completado */}
        <button onClick={() => toggleTaskCompletion(task.id)}>
          {task.completed ? (
            <FaCheckCircle className="text-green-500" />  // Si esta completa mostramos un circulo relleno
          ) : (
            <FaRegCircle className="text-gray-500 dark:text-gray-400" />  // Si no está completada mostramos un circulo vacio
          )}
        </button>
        {/* Muestra la categoria */}
        <p className="text-slate-400"><em>Categoría: {task.category}</em></p>
      </div>

      {/* Modal de confirmacion */}
      <SimpleModal
        isOpen={isModalOpen}  // Pasamos el estado de visibilidad
        onConfirm={handleConfirmDelete}  // Función a ejecutar si el usuario confirma la eliminación
        onCancel={handleCancelDelete}  // Función a ejecutar si el usuario cancela la eliminación
      />
    </div>
  );
};

export default TaskItem;