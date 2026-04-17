"use client";

import { useQuery } from "@tanstack/react-query";
import { getTodos } from "@/utils/localTodos";
import { Button } from "@/components/ui/button";
import type { Todo } from "@/types/todo";

interface TodoDetailProps {
  id: string;
}

const fetchTodo = async (id: string): Promise<Todo> => {
  const numericId = Number(id);

  const todos = getTodos();
  const found = todos.find((t: Todo) => t.id === numericId);
  if (found) return found;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${numericId}`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch todo");
  }
  return await res.json();
};

export default function TodoDetail({ id }: TodoDetailProps) {
  const { data, isLoading, isError } = useQuery<Todo>({
    queryKey: ["todo", id],
    queryFn: () => fetchTodo(id),
  });

  if (isLoading)
    return (
      <p className="text-gray-400 text-center mt-12 animate-pulse">
        Loading...
      </p>
    );

  if (isError || !data)
    return (
      <p className="text-red-500 text-center mt-12 font-semibold">
        🚫 Error loading todo.
      </p>
    );

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 max-w-2xl mx-auto shadow-xl space-y-6">
      <h2 className="text-2xl font-bold text-blue-100">📝 Todo Details</h2>
      <p>ID: {data.id}</p>
      <p>Title: {data.title}</p>
      <p>Status: {data.completed ? "✅ Completed" : "❌ Incomplete"}</p>

      <Button onClick={() => history.back()}>← Back</Button>
    </div>
  );
}
