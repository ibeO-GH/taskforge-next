export const getTodos = (): any[] => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem("todos");
  return data ? JSON.parse(data) : [];
};

export const saveTodos = (todos: any[]) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
