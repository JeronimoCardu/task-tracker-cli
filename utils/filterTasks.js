const fs = require('node:fs/promises')

async function filterTasks (filter, jsonFile) {
  let tasks = []
  try {
    const data = await fs.readFile(jsonFile, 'utf-8')
    tasks = data ? await JSON.parse(data) : []
    if (tasks.length === 0) {
      console.log('No hay tareas')
      process.exit(0)
    }
    switch (filter) {
      case 'todo':
        tasks.forEach(task => {
          if (task.status === 'to do') {
            console.log(`${task.id} - created: ${task.createdAt} - updated: ${task.updatedAt} - ${task.status} ----> ${task.description}`)
          }
        }
        )
        break
      case 'progress':
        tasks.forEach(task => {
          if (task.status === 'in progress') {
            console.log(`${task.id} - created: ${task.createdAt} - updated: ${task.updatedAt} - ${task.status} ----> ${task.description}`)
          }
        }
        )
        break
      case 'done':
        tasks.forEach(task => {
          if (task.status === 'done') {
            console.log(`${task.id} - created: ${task.createdAt} - updated: ${task.updatedAt} - ${task.status} ----> ${task.description}`)
          }
        }
        )
        break
      default:
        tasks.forEach(task => {
          console.log(`${task.id} - created: ${task.createdAt} - updated: ${task.updatedAt} - ${task.status} ----> ${task.description}`)
        })
        break
    }
  } catch (err) {
    console.log(err)
  }
}

module.exports = { filterTasks }
