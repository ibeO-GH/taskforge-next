"use client";

import React from "react";
import TodoDetail from "@/components/TodoDetail";

export default function TodoDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Unwrap the async params object
  const { id } = React.use(params);

  return <TodoDetail id={id} />;
}
