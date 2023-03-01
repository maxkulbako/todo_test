import { ToDoItem } from './ToDoItem';

export function ToDoList() {
  return (
    <div className="todo_list_wrapper">
      <div className="todo_list_title">
        <p>ID</p>
        <p>TITLE</p>
        <p>DESCRIPTION</p>
        <p>STATUS</p>
      </div>
      <ToDoItem/>
      <ToDoItem/>
      <ToDoItem/>
      <ToDoItem/>
    </div>
  );
}