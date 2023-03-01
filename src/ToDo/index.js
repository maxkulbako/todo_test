import { connect } from 'react-redux';
import { ToDoForm, ToDoList } from './components';
import { selectorToDoList } from './selectors';

function ToDoView({ toDoList }) {
  return (
    <div className="todo_list_container">
      <ToDoForm />
      <ToDoList
        itemsList={toDoList}
      />
    </div>
  );
}

const mapState = (state) => ({
  toDoList: selectorToDoList(state),
})

export const ToDo = connect(mapState)(ToDoView);
