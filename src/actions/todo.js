export const todoCreate = (payload) => {
    return {
        type: 'TODO_CREATE',
        payload: {
            id: payload.title.length + (100*Math.random()) + 1,
            title: payload.title,
            completed: false
        }
    }
}

