import { useState, ChangeEvent, FormEvent } from "react";
import { Task } from "@/hooks/useTasks";
import { Toaster, toast } from "react-hot-toast";
import { Plus } from "lucide-react";

interface TaskInputProps {
  addTask: (task: Task) => void;  // Prop para la función que agrega una nueva tarea
}

const TaskInput = ({ addTask }: TaskInputProps) => {
  const [taskText, setTaskText] = useState("");  // Estado para el texto de la tarea
  const [category, setCategory] = useState<"Personal" | "Trabajo" | "Urgente">("Personal");  // Estado para la categoría de la tarea

  // Función que maneja el envio del formulario
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Verificamos que el texto de la tarea no esté vacío
    if (!taskText.trim()) {
      toast.error("La tarea no puede estar vacía.", {  // Si está vacío, mostramos un mensaje de error
        className: "bg-white dark:bg-gray-800 text-black dark:text-white",
      });
      return;
    }

    // Verificamos que el texto no supere los 50 caracteres
    if (taskText.length > 50) {
      toast.error("La tarea no puede tener más de 50 caracteres.", {  // Si es demasiado largo, mostramos un mensaje de error
        className: "bg-white dark:bg-gray-800 text-black dark:text-white",
      });
      return;
    }

    // Creamos el nuevo objeto de tarea
    const newTask: Task = {
      id: Date.now(),  // Usamos la fecha actual como 'id' único
      text: taskText,  // El texto de la tarea
      category,  // La categoría seleccionada
      completed: false,  // Inicialmente, la tarea no está completada
    };

    addTask(newTask);  // Llamamos a la función 'addTask' para agregar la tarea
    setTaskText("");  // Limpiamos el campo de texto después de agregar la tarea
    setCategory("Personal");  // Restablecemos la categoría a "Personal"
    toast.success("Tarea agregada con éxito!", {  // Mostramos una notificación de éxito
      className: "bg-white dark:bg-gray-800 text-black dark:text-white",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}  // Al enviar el formulario, ejecutamos el handleSubmit
      className="md:max-w-2xl md:mx-auto p-4 m-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-none"
    >
      {/* Para mostrar notificaciones */}
      <Toaster position="bottom-left" reverseOrder={false} />
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        {/* Campo de texto para ingresar el nombre de la tarea */}
        <input
          type="text"
          value={taskText}  // El valor del campo es el estado 'taskText'
          onChange={(e: ChangeEvent<HTMLInputElement>) => setTaskText(e.target.value)}
          placeholder="Agregar nueva tarea..."
          className="sm:flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-400"
        />
        
        {/* Selector de categoría de la tarea */}
        <select
          value={category}  // El valor del selector es el estado 'category'
          onChange={(e: ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value as "Personal" | "Trabajo" | "Urgente")}  // Actualiza la categoría
          className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
        >
          <option value="Personal">🧑‍💻 Personal</option>
          <option value="Trabajo">💼 Trabajo</option>
          <option value="Urgente">⚡ Urgente</option>
        </select>

        {/* Botón para agregar la tarea */}
        <button
          type="submit"  // 'submit' para enviar el formulario
          className="w-full md:w-28 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          <div className="flex justify-center items-center">
            <Plus /> 
            Agregar
          </div>
        </button>
      </div>
    </form>
  );
};

export default TaskInput;