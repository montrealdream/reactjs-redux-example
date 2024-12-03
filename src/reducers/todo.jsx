// Khởi tạo ban đầu
const initialTodo = {
    todos: [
        {
            id: 1,
            title: 'Công việc 1',
            completed: false
        },
        {
            id: 2,
            title: 'Công việc 2',
            completed: true
        },
    ]
};

export const todoReducer = (state = initialTodo, action) => {
    switch(action.type) {
        case 'TODO_CREATE':
            return {
                todos: [
                    ...state.todos, 
                    action.payload
                ]
            }

        default: return state;
    }
}