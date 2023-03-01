import { ToDoForm, ToDoList } from './components';

export function ToDo() {
  return (
    <div className="todo_list_container">
      <ToDoForm />
      <ToDoList />
    </div>
  );
}