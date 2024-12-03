import { useSelector } from "react-redux";

export const TodoList = () => {
    // const dispatch = useDispatch(); // khởi tạo dispatch

    const todos = useSelector(state =>  state.todoReducer.todos);

    return (
        <>
            <ul className="todo-list">
                {todos.map(todo => (
                    <li key={todo.id}>
                        <span className="todo-list__title">
                            {todo.title}
                        </span>
                        <span className="todo-list__buttons">
                            <button>Chỉnh sửa</button>
                            <button>Xóa</button>
                        </span>
                    </li>
                ))}
            </ul>
        </>
    );
}