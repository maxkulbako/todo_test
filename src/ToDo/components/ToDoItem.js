export function ToDoItem({ id, title, description, status }) {
  return (
    <div className="todo_item_wrapper">
        <p>{id}</p>
        <p>{title}</p>
        <p>{description}</p>
        <input type="checkbox" checked={status} />
    </div>
  );
}