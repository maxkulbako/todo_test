import { 
  actionAddItem,
  actionChangeItemStatus,
  actionSelectActiveItem
} from '../actions';

const initialState = {
  activeItem: null,
  toDoList: [
    {
      id: 1,
      title: 'Make sth',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, blanditiis qui deserunt nulla sapiente saepe nobis? Aperiam voluptatem cupiditate vel quo, aliquam veritatis nihil quaerat quibusdam quasi modi tempore ad.",
      status: true,
    },
    {
      id: 2,
      title: 'Make sth',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, blanditiis qui deserunt nulla sapiente saepe nobis? Aperiam voluptatem cupiditate vel quo, aliquam veritatis nihil quaerat quibusdam quasi modi tempore ad.',
      status: false,
    },
    {
      id: 3,
      title: 'Make sth',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, blanditiis qui deserunt nulla sapiente saepe nobis? Aperiam voluptatem cupiditate vel quo, aliquam veritatis nihil quaerat quibusdam quasi modi tempore ad.',
      status: false,
    },
  ],
};

export function todoListReducer(state = initialState, action = {}) {
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
    
    case actionSelectActiveItem.TYPE:
      return {
        ...state,
        activeItem: action.payload
      }
    

    default:
      return state;
    }
}