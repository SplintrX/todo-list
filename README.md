# 📄 Aplicación Lista de Tareas

Una aplicación moderna y responsiva para la gestión de tareas, construida con **Next.js**, **React** y **TypeScript**. Cuenta con una interfaz limpia, soporte para tema claro/oscuro y almacenamiento persistente.

## ✨ Características

- ✅ Crear, eliminar y marcar tareas como completadas.
- 📺 Categorizar tareas: **Personal**, **Trabajo**, **Urgente**.
- 🌑 Soporte para tema claro/oscuro.
- 🔐 Almacenamiento persistente usando **localStorage**.
- 📱 Diseño totalmente responsivo.
- 🎯 Contador de tareas completadas e incompletas.

---

## 🔧 Instalación

Clona el repositorio:

```bash
git clone https://github.com/SplintrX/todo-list.git
cd [nombre-del-repositorio]
```

Instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

---

## 🔬 Tecnologías y Librerías Utilizadas

- **Next.js**: Framework de React para producción.
- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **TypeScript**: Tipado estático para JavaScript.
- **Tailwind CSS**: Framework de CSS basado en utilidades.
- **React Icons**: Biblioteca de íconos.
- **Lucide React**: Componentes de íconos.
- **React Hot Toast**: Notificaciones estilo toast.
- **LocalStorage API**: Para almacenamiento persistente de datos.

---

## 🏢 Estructura del Proyecto

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── TaskInput.tsx
│   ├── TaskList.tsx
│   ├── TaskItem.tsx
│   ├── SimpleModal.tsx
│   └── ThemeButton.tsx
└── hooks/
    └── useTasks.ts
```

---

## 🔍 Uso

1. Agrega una nueva tarea usando el campo de entrada.
2. Selecciona una categoría (**Personal**, **Trabajo** o **Urgente**).
3. Haz clic en el botón **Agregar** para crear la tarea.
4. Marca tareas como completadas/incompletas haciendo clic en el ícono del círculo.
5. Elimina tareas usando el ícono de la papelera (requiere confirmación).
6. Alterna entre tema claro y oscuro usando el botón de tema.

---

## 📗 Documentación Técnica

### Estructura de Componentes

#### **Layout Principal** (`RootLayout`)
```typescript
// app/layout.tsx
```
- Define la estructura básica de la aplicación.
- Implementa el tema claro/oscuro a nivel global.
- Incluye el **ThemeButton** para cambiar entre temas.

#### **Página Principal** (`Home`)
```typescript
// app/page.tsx
```
- Integra los componentes **TaskInput** y **TaskList**.
- Utiliza el hook personalizado `useTasks` para la gestión de estado.
- Muestra el contador de tareas completadas e incompletas.

### Componentes Principales

#### **TaskInput**
```typescript
// components/TaskInput.tsx
```
- Maneja la entrada de nuevas tareas.
- **Validaciones**:
  - No permite tareas vacías.
  - Límite de 50 caracteres.
- Gestiona categorías: **Personal**, **Trabajo**, **Urgente**.
- Implementa notificaciones estilo toast para feedback.

#### **TaskList**
```typescript
// components/TaskList.tsx
```
- Renderiza la lista de tareas.
- Ordena por ID (más recientes primero).
- Soporte para grid responsivo (1-3 columnas según el viewport).

#### **TaskItem**
```typescript
// components/TaskItem.tsx
```
- Renderiza cada tarea individual.
- Gestiona:
  - Estado de completado.
  - Eliminación con confirmación.
  - Estilos según categoría y estado.

#### **SimpleModal**
```typescript
// components/SimpleModal.tsx
```
- Modal de confirmación para eliminación.
- **Props**:
  - `isOpen`: `boolean`
  - `onConfirm`: `() => void`
  - `onCancel`: `() => void`

#### **ThemeButton**
```typescript
// components/ThemeButton.tsx
```
- Gestiona el cambio de tema claro/oscuro.
- Persiste la preferencia en **localStorage**.
- Sincroniza con preferencias del sistema.

### Hook Personalizado

#### **useTasks**
```typescript
// hooks/useTasks.ts
```
- Gestión centralizada del estado de tareas.
- **Interfaz Task**:
  ```typescript
  {
    id: number;
    text: string;
    category: "Personal" | "Trabajo" | "Urgente";
    completed: boolean;
  }
  ```
- **Funcionalidades**:
  - `addTask`: Agregar nueva tarea.
  - `deleteTask`: Eliminar tarea existente.
  - `toggleTaskCompletion`: Cambiar estado.
  - Contador de tareas completas/incompletas.
- Persistencia en **localStorage**.

---

## 🎨 Estilos y Diseño Responsivo

### Sistema de Grid
```css
grid-cols-1 md:grid-cols-2 lg:grid-cols-3
```

### Temas
- **Claro**: `bg-white`, `text-black`.
- **Oscuro**: `dark:bg-gray-800`, `dark:text-white`.

### Categorías
- **Personal**: `border-green-500`.
- **Trabajo**: `border-blue-500`.
- **Urgente**: `border-red-500`.

---

## ⭐ Autor

Juan Eduardo Gómez Rojas

---
