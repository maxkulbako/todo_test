import { createStore } from 'redux';

const initialState = {
  activeItem: null,
  toDoList: [
    {
      id: 1,
      title: 'Make sth',
      description: "alskdlakjsdklajsdlkajd",
      status: true,
    },
    {
      id: 2,
      title: 'Make sth',
      description: 'alskdlakjsdklajsdlkajd',
      status: false,
    },
    {
      id: 3,
      title: 'Make sth',
      description: 'alskdlakjsdklajsdlkajd',
      status: false,
    },
  ],
};

function rootReducer(state = initialState, action = {}) {
  return state;
}

export const store = createStore(rootReducer);