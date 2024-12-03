import { BoxTitle } from "../BoxTitle/BoxTitle";
import { TodoCreate } from "./TodoCreate";
import { TodoList } from "./TodoList";

export const Todo = () => {
    return (
        <>
            <BoxTitle title={'Todo Sử dụng redux'}/>
            <TodoList/>
            <TodoCreate/>
        </>
    );
}