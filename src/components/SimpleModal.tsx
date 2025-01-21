interface SimpleModalProps {
  isOpen: boolean;  // Propiedad que indica si el modal está abierto o cerrado
  onConfirm: () => void;  // Función que se ejecutará cuando el usuario confirme la acción
  onCancel: () => void;  // Función que se ejecutará cuando el usuario cancele la acción
}

const SimpleModal = ({ isOpen, onConfirm, onCancel }: SimpleModalProps) => {
  // Si 'isOpen' es falso, el modal no se renderiza
  if (!isOpen) return null;

  return (
    // Contenedor principal del modal
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-lg font-semibold mb-4 text-black dark:text-white">
          ¿Estás seguro de que deseas borrar esta tarea?
        </h2>
        
        <div className="flex justify-end space-x-4">
          {/* Botón de "Cancelar" que ejecuta la función onCancel */}
          <button
            className="bg-gray-300 text-black dark:bg-gray-600 dark:text-white px-4 py-2 rounded-lg"
            onClick={onCancel} 
          >
            Cancelar
          </button>
          
          {/* Botón de "Confirmar" que ejecuta la función onConfirm */}
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
            onClick={onConfirm}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimpleModal;