import { createStore, combineReducers } from 'redux';
import { todoListReducer } from '../../ToDo/reducer';

const rootReducer = combineReducers({
  toDoStore: todoListReducer,
});

export const store = createStore(rootReducer);