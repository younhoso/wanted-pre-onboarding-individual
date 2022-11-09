import React, { useState, useMemo, useCallback } from 'react';

const TodosStateContext = React.createContext({
  todos: [],
});

const TodosDispatchContext = React.createContext(null);

const TodosContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const getTodoState = useCallback(todos => {
    setTodos(todos.reverse());
  }, []);

  const createTodoState = useCallback(newTodo => {
    setTodos(prevTodos => [newTodo, ...prevTodos]);
  }, []);

  const updateTodoState = useCallback(newTodo => {
    setTodos(prevTodos => prevTodos.map(todo => (todo.id === newTodo.id ? newTodo : todo)));
  }, []);

  const deleteTodoState = useCallback(id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }, []);

  const todoDispatch = useMemo(
    () => ({
      getTodoState,
      createTodoState,
      updateTodoState,
      deleteTodoState,
    }),
    [getTodoState, createTodoState, updateTodoState, deleteTodoState]
  );

  return (
    <TodosStateContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={todoDispatch}>{children}</TodosDispatchContext.Provider>
    </TodosStateContext.Provider>
  );
};

export default TodosContextProvider;
export { TodosStateContext, TodosDispatchContext };