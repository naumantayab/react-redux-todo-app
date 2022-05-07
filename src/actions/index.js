export const addTodo = ({ title, id }) => ({
  type: "ADD_TODO",
  payload: {
    title,
    id
  }
})

export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  payload: {
    id
  }
})

export const deleteAll = () => ({
  type: "DELETE_ALL_TODO"
})


export const editTodo = ({ title, id }) => ({
  type: "EDIT_TODO",
  payload: {
    title,
    id
  }
})

export const activeTodo = ({ title, id, status }) => ({
  type: "ACTIVE_TODO",
  payload: {
    title,
    id,
    status
  }
})