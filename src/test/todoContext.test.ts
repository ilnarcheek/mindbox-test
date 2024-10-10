import { todoReducer } from "../context/todoReducer";
import ITodo from "../types/ITodo";

const initialState: ITodo[] = [
  { id: 1, description: "Тестовое задание", isDone: false },
  { id: 2, description: "Прекрасный код", isDone: false },
  { id: 3, description: "Покрытие тестами", isDone: true },
];

describe("todoReducer", () => {
  it("Добавление новой тудушки", () => {
    const action = { type: "ADD_TODO", payload: "Новое задание" };
    const newState = todoReducer(initialState, action);

    expect(newState).toHaveLength(4);
    expect(newState[3]).toEqual({
      id: 4,
      description: "Новое задание",
      isDone: false,
    });
  });

  it("Включение тудушки", () => {
    const action = { type: "TOGGLE_TODO", payload: 2 };
    const newState = todoReducer(initialState, action);

    expect(newState[1].isDone).toBe(true);
  });

  it("Убираем сделанные тудушки", () => {
    const action = { type: "CLEAR_DONE_TODOS" };
    const newState = todoReducer(initialState, action);

    expect(newState).toHaveLength(2);
    expect(newState.find((todo) => todo.isDone)).toBeUndefined();
  });

  it("Проверка если тайп написан неправильно", () => {
    const action = { type: "TOGGLETODO" };
    const newState = todoReducer(initialState, action);

    expect(newState).toBe(initialState);
  });
});
