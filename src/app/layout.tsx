import ThemeButton from "@/components/ThemeButton";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Todo-List</title>
      </head>
      <body className="bg-slate-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {children}
        {/* Agregamos el botón para cambiar el tema claro/oscuro */}
        <ThemeButton />
      </body>
    </html>
  );
}