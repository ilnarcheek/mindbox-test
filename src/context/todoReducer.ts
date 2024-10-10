import ITodo from "../types/ITodo";

interface IAction {
  type: string;
  payload?: string | number;
}

export const todoReducer = (state: ITodo[], action: IAction): ITodo[] => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: state[state.length - 1]?.id ? state[state.length - 1].id + 1 : 1,
          description: action.payload as string,
          isDone: false,
        },
      ];

    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );

    case "CLEAR_DONE_TODOS":
      return state.filter((todo) => !todo.isDone);

    default:
      return state;
  }
};
