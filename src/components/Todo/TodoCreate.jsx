import { BoxTitle } from "../BoxTitle/BoxTitle";
import { todoCreate } from "../../actions/todo";
import { useDispatch } from "react-redux";

export const TodoCreate = () => {
    const dispatch = useDispatch(); // khởi tạo dispatch

    const createTodoFunc = (event) => {
        event.preventDefault(); 

        const title = event.target.title.value; 

        if(title)
            dispatch(todoCreate({title: title}));

        event.target.title.value = "";
    }

    return (
        <>
            <BoxTitle title="Tạo mới công việc"/>
            <form action="" onSubmit={createTodoFunc}>
                <input type="text" name="title" placeholder="tên công việc" />
                <button type="submit">Tạo mới</button>
            </form>
        </>
    );
}