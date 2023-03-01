export function ToDoItem({
    id,
    title,
    description,
    status,
    onChangeStatus
  }) {
  return (
    <div className="todo_item_wrapper">
        <p>{id}</p>
        <p>{title}</p>
        <p>{description}</p>
        <input
          type="checkbox"
          checked={status}
          onChange={() => onChangeStatus(id)}
          />
    </div>
  );
}