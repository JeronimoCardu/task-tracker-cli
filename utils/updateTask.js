const fs = require('node:fs/promises')
const { getDate } = require('./getDate')

async function updateTask (id, jsonFile, newValue = '') {
  if (newValue === '') {
    console.log('agregue todos los datos, ID y DESCRIPCION ACTULIZADA')
    process.exit(0)
  }
  let tasks = []
  try {
    const data = await fs.readFile(jsonFile, 'utf-8')
    tasks = data ? await JSON.parse(data) : []
    if (tasks.length === 0) {
      console.log('No hay tareas para actualizar')
      process.exit(0)
    }

    let found = false
    const tasksUpdated = await tasks.map(task => {
      if (task.id === Number(id)) {
        found = true
        return {
          id: task.id,
          description: newValue,
          status: task.status,
          createdAt: task.createdAt,
          updatedAt: getDate()
        }
      }
      return task
    })
    if (!found) console.log('tarea no encontrada')
    await fs.writeFile(jsonFile, JSON.stringify(tasksUpdated))
  } catch (err) {
    console.log(err)
  }
}

module.exports = { updateTask }
