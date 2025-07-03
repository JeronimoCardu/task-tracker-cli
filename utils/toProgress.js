const fs = require('node:fs/promises')

async function toProgress (id, jsonFile) {
  let tasks = []
  try {
    const data = await fs.readFile(jsonFile, 'utf-8')
    tasks = data ? await JSON.parse(data) : []
    if (tasks.length === 0) {
      console.log('No hay tareas')
      process.exit(0)
    }
    let found = false
    const tasksUpdate = await tasks.map(task => {
      if (task.id === Number(id)) {
        found = true
        return {
          id: task.id,
          description: task.description,
          status: 'in progress',
          createdAt: task.createdAt,
          updateTask: task.updateTask
        }
      }
      return task
    })
    if (!found) {
      console.log('No se pudo encontrar la tarea')
      process.exit(0)
    }
    await fs.writeFile(jsonFile, JSON.stringify(tasksUpdate))
  } catch (err) {
    console.log(err)
  }
}

module.exports = { toProgress }
