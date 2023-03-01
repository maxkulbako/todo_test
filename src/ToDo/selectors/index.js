export const selectorToDoList = (state) => state.toDoList;

export const selectActiveItem = state => {
  const items = state.toDoList;
  const activeItemId = state.activeItem;

  return items.find(item => item.id === activeItemId);
}