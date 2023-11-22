import React from "react";
import { TodoListItemType } from "../AppContainer";

type TodoListItemProps = {
    todoItem: TodoListItemType;
    toggleDone: (no: number) => void;
    deleteTodo: (no: number) => void;
};

const TodoListItem = (props: TodoListItemProps) => {
    let itemClassName = "list-group-item";
    if (props.todoItem.done) itemClassName += " list-group-item-success";
    
}