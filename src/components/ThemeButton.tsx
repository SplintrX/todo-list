'use client'

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeButton: React.FC = () => {
  // Usamos el estado 'isClient' para saber si estamos en el cliente
  const [isClient, setIsClient] = useState(false);
  
  // Usamos una función de inicialización para leer el tema desde localStorage si está disponible
  const [theme, setTheme] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme"); // Si hay un tema guardado, lo cargamos
      if (savedTheme) {
        return savedTheme;
      }

      // Si no hay tema guardado verificamos la preferencia del sistema
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";  // Si el sistema está en modo oscuro, lo usamos como tema
      }

      return "light"; // Por defecto, usamos el tema claro
    }
    return "light"; // En caso de no poder acceder al entorno del navegador el tema por defecto es claro
  });

  useEffect(() => {
    // Este efecto se ejecuta cuando el componente se monta o cada vez que el 'theme' cambie.
    setIsClient(true);

    // Aplicamos la clase "dark" si el tema es oscuro.
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      // Si el tema no es oscuro eliminamos la clase "dark".
      document.querySelector("html")?.classList.remove("dark");
    }

    // Guardamos el tema en localStorage para mantenerlo entre sesiones
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);  // Depende del estado 'theme', por lo que se ejecuta cada vez que cambia.

  // Función que se llama cuando el usuario hace clic en el botón para cambiar el tema.
  // Varia entre "light" y "dark".
  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Si no estamos en el cliente aún, no renderizamos nada
  if (!isClient) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-10">  {/* Posicionamos el botón en la parte inferior derecha */}
      <button
        className="p-4 rounded-full bg-white hover:bg-slate-100 dark:bg-slate-950 dark:hover:bg-slate-900 shadow-md hover:shadow-lg" 
        // Cuando el botón es presionado, se cambia el tema.
        onClick={handleChangeTheme} 
      >
        {theme === "light" ? (  // Si el tema es claro, mostramos el ícono de sol
          <Sun className="text-yellow-500" size={24} />
        ) : (  // Si el tema es oscuro, mostramos el ícono de luna
          <Moon className="text-gray-400" size={24} />
        )}
      </button>
    </div>
  );
  
};

export default ThemeButton;