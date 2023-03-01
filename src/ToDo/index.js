import { connect } from 'react-redux';
import { useState } from 'react';
import { ToDoForm, ToDoList, Modal } from './components';
import { selectorToDoList } from './selectors';
import { actionAddItem, actionChangeItemStatus } from './actions';

function ToDoView({ toDoList, addItem, changeItemStatus }) {
  const [activeModal, setActiveMOdal] = useState(true);

  return (
    <div className="todo_list_container">
      <Modal
        isActive={activeModal}
        setActiveModal={setActiveMOdal}
      />
      <ToDoForm onAddItem={addItem} />
      <ToDoList
        itemsList={toDoList}
        onChangeStatus={changeItemStatus}
      />
    </div>
  );
}

const mapState = (state) => ({
  toDoList: selectorToDoList(state),
})

const mapDispatch = (dispatch) => ({
  addItem: (item) => dispatch(actionAddItem(item)),
  changeItemStatus: (id) => dispatch(actionChangeItemStatus(id)),
});

export const ToDo = connect(mapState, mapDispatch)(ToDoView);
