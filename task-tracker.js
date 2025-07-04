const { addTask } = require('./utils/addTask')
const { deleteTask } = require('./utils/deleteTask')
const { toDone } = require('./utils/toDone')
const { toProgress } = require('./utils/toProgress')
const { updateTask } = require('./utils/updateTask')
const { filterTasks } = require('./utils/filterTasks')

async function menu () {
  const jsonFile = './tasks.json'
  const action = process.argv[2]
  if (action === '7') process.exit(0)
  const value = process.argv[3]
  const newValue = process.argv[4]
  if (process.argv[2] === undefined) {
    console.log(`
      ------ menu ------
      What do you to do?
      1. Add task -> "task"
      2. Update task -> ID "task"
      3. Delete task -> ID
      4. Mark task in progress -> ID
      5. Mark task is done -> ID
      6. Filter -> "all | todo | progress | done"
      7. EXIT
      write 'node task-tracker [option] [ID] [optional newValue]'`)
  }

  switch (action) {
    case '1':
      addTask(value, jsonFile)
      break
    case '2':
      updateTask(value, jsonFile, newValue)
      break
    case '3':
      deleteTask(value, jsonFile)
      break
    case '4':
      toProgress(value, jsonFile)
      break
    case '5':
      toDone(value, jsonFile)
      break
    case '6':
      filterTasks(value, jsonFile)
      break
    default:
      console.log('Opcion invalida, saliendo...')
      process.exit(0)
  }
}
menu()
