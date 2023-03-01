import { connect } from 'react-redux';
import { ToDoForm, ToDoList } from './components';
import { selectorToDoList } from './selectors';
import { actionAddItem, actionChangeItemStatus } from './actions';

function ToDoView({ toDoList, addItem, changeItemStatus }) {
  return (
    <div className="todo_list_container">
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
