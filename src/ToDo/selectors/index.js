export const selectorToDoList = (state) => state.toDoStore.toDoList;

export const selectActiveItem = state => {
  const items = selectorToDoList(state);
  const activeItemId = state.toDoStore.activeItem;

  return items.find(item => item.id === activeItemId);
}