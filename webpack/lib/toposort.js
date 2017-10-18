/*
 * Sorting graph
 */

module.exports = (nodes, edges) => {
  let cursor = nodes.length
  let sorted = new Array(cursor)
  let visited = {}
  let i = cursor

  while (i--) {
    if (!visited[i]) {
      visit(nodes[i], i, [])
    }
  }

  return sorted

  function visit(node, i, predecessors) {
    if (visited[i]) {
      return
    }
    visited[i] = true

    // outgoing edges
    let outgoing = edges.filter( edge => edge[0] === node)
    if (i = outgoing.length) {
      let preds = predecessors.concat(node)
      do {
        let child = outgoing[--i][1]
        visit(child, nodes.indexOf(child), preds)
      } while (i)
    }

    sorted[--cursor] = node
  }
}
