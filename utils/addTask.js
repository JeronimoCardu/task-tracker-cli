const fs = require('node:fs/promises')
const { getDate } = require('./getDate.js')
const { getNextID } = require('./getNextID.js')

async function addTask (value = '') {
  if (value === '') {
    console.log('Add the task that you want')
    process.exit(0)
  }
  const jsonFile = './tasks.json'
  let tasks = []
  try {
    const data = await fs.readFile(jsonFile, 'utf-8')
    tasks = data ? JSON.parse(data) : []
  } catch (err) {
    console.error(err)
  }
  const newTask = [...tasks, {
    id: getNextID(tasks),
    description: value,
    status: 'todo',
    createdAt: getDate(),
    updatedAt: getDate()
  }]
  await fs.writeFile(jsonFile, JSON.stringify(newTask))
}

module.exports = { addTask }
