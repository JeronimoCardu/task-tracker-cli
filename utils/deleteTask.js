const fs = require('node:fs/promises')

async function deleteTask (id, jsonFile) {
  let tasks = []
  try {
    const data = await fs.readFile(jsonFile, 'utf-8')
    tasks = data ? await JSON.parse(data) : []
    if (tasks.length === 0) {
      console.log('No se pudo encontrar la tarea')
      process.exit(0)
    }
    const quantity = tasks.length
    const tasksUpdate = await tasks.filter(task => task.id !== Number(id))
    if (quantity === tasksUpdate.length) console.log('No se pudo encontrar la tarea')
    await fs.writeFile(jsonFile, JSON.stringify(tasksUpdate))
  } catch (err) {
    console.log(err)
  }
}
module.exports = { deleteTask }
