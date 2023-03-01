import { createStore } from 'redux';
import { actionAddItem, actionChangeItemStatus } from '../../ToDo/actions';

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
  console.log(action.payload);

  switch (action.type)  {
    
    case actionAddItem.TYPE:
      const getMaxId = (id) =>  {
        return Math.max.apply(null, id);
      }

      const lastItemId = getMaxId(state.toDoList.map(item => item.id));
      const newId = lastItemId + 1;
    
      const newItem = {
        id: newId,
        title: action.payload.title,
        description: action.payload.description,
        status: false,
      };
    
      return {
        ...state,
        toDoList: [...state.toDoList, newItem],
      };

    case actionChangeItemStatus.TYPE:
      return { 
        ...state, 
        toDoList: state.toDoList.map(item => (
          item.id === action.payload
            ? {...item, status: !item.status}
            : item
        ))
      };
    
    default:
      return state;
    }
}

export const store = createStore(rootReducer);