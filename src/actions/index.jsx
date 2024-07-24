export const addTask = (text) => ({
    type: 'add_task',
    payload: text
})

export const toggleTask = (id) => ({
    type: 'toggle_task',
    payload: id
})