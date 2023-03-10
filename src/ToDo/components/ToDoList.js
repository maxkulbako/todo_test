import { ToDoItem } from './ToDoItem';

export function ToDoList({
  itemsList,
  onChangeStatus,
  selectActiveItem,
  setActiveModal
}) {
  return (
    <div className="todo_list_wrapper">
      <div className="todo_list_title">
        <p>ID</p>
        <p>TITLE</p>
        <p>DESCRIPTION</p>
        <p>STATUS</p>
      </div>
      {
        itemsList.map(({id, title, description, status}) => (
          <ToDoItem
            key={id}
            id={id}
            title={title}
            description={description}
            status={status}
            onChangeStatus={onChangeStatus}
            selectActiveItem={selectActiveItem}
            setActiveModal={setActiveModal}
          />
        ))
      }
    </div>
  );
}