"use client";

import Header from "@/components/Header";
import TodoList from "@/components/TodoList";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <TodoList />
      </main>
    </>
  );
}
