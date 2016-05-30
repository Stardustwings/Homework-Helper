export const addAssignment = (title, content) => {
  return {
    type: 'ADD_ASSIGNMENT',
    title,
    content
  }
}
