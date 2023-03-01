import { connect } from 'react-redux';
import { useState } from 'react';
import { ToDoForm, ToDoList, Modal, ToDoItem } from './components';
import { selectorToDoList, selectActiveItem } from './selectors';
import {
  actionAddItem,
  actionChangeItemStatus,
  actionSelectActiveItem,
} from './actions';

function ToDoView({
  toDoList,
  addItem,
  changeItemStatus,
  activeItem,
  selectActiveItem
}) {

  const [activeModal, setActiveModal] = useState(false);

  return (
    <div className="todo_list_container">
      <Modal
        isActive={activeModal}
        setActiveModal={setActiveModal}
      >
        <ToDoItem {...activeItem} onChangeStatus={changeItemStatus}/>
      </Modal>
      <ToDoForm onAddItem={addItem} />
      <ToDoList
        itemsList={toDoList}
        onChangeStatus={changeItemStatus}
        selectActiveItem={selectActiveItem}
        setActiveModal={setActiveModal}
      />
    </div>
  );
}

const mapState = (state) => ({
  toDoList: selectorToDoList(state),
  activeItem: selectActiveItem(state),
})

const mapDispatch = (dispatch) => ({
  addItem: (item) => dispatch(actionAddItem(item)),
  changeItemStatus: (id) => dispatch(actionChangeItemStatus(id)),
  selectActiveItem: (id) => dispatch(actionSelectActiveItem(id)),
});

export const ToDo = connect(mapState, mapDispatch)(ToDoView);
