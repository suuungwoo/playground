const getUniqueId = () => {
  return new Date().getTime().toString(36) + '-' + Math.random().toString(36);
};
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: getUniqueId(),
  text,
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
});
