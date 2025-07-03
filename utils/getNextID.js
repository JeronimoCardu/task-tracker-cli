function getNextID (tasks) {
  if (tasks.length === 0) return 0
  const ids = tasks.map(task => task.id)
  const idsOrder = ids.sort((a, b) => {
    if (a < b) return 1
    if (a > b) return -1
    return 0
  })
  const lastId = idsOrder[0]
  return lastId + 1
}

module.exports = { getNextID }
