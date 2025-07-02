# 📝 Task Tracker CLI

[Project Page URL](https://roadmap.sh/projects/task-tracker)

**Task Tracker** es una aplicación de línea de comandos (CLI) para gestionar tareas. Te permite llevar un registro de lo que necesitas hacer, lo que estás haciendo y lo que ya completaste.

Este proyecto te ayudará a practicar tus habilidades de programación, incluyendo:

- Manejo del sistema de archivos
- Gestión de entradas del usuario
- Construcción de una aplicación CLI

---

## 🚀 Características

- Agregar, actualizar y eliminar tareas
- Marcar tareas como `in progress` o `done`
- Listar todas las tareas
- Filtrar tareas por estado: `todo`, `in progress`, `done`

---

## 📂 Requisitos

- Ejecutable desde la línea de comandos
- Uso de argumentos posicionales para ingresar acciones
- Almacenamiento de tareas en un archivo `tasks.json`
- Creación automática del archivo si no existe
- Uso del módulo nativo del sistema de archivos
- **No se permiten librerías externas o frameworks**
- Manejo adecuado de errores y casos límite

---

## 💻 Comandos de Ejemplo

```bash
# Agregar una nueva tarea
task-cli add "Buy groceries"
# Output: Task added successfully (ID: 1)

# Actualizar y eliminar tareas
task-cli update 1 "Buy groceries and cook dinner"
task-cli delete 1

# Marcar tarea como en progreso o completada
task-cli mark-in-progress 1
task-cli mark-done 1

# Listar todas las tareas
task-cli list

# Filtrar tareas por estado
task-cli list done
task-cli list todo
task-cli list in-progress
