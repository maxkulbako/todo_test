export function ToDoItem({
    id,
    title,
    description,
    status,
    onChangeStatus,
    selectActiveItem,
    setActiveModal
  }) {
  return (
    <div
      className="todo_item_wrapper"
      onClick={() => {
        selectActiveItem(id);
        setActiveModal(true);
        }}
      >
      <div  className="todo_item_id">
        <p>{id}</p>
      </div>
      <div className="todo_item_title">
        <p>{title}</p>
      </div>
      <div className="todo_item_description">
        <span>Description</span>
        <p>{description}</p>
      </div>
      <div className="todo_input_wrapper">
        <span>Status</span>
        <input
        className="todo_item_input"
        type="checkbox"
        checked={status || false}
        onChange={() => onChangeStatus(id)}
        onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
}