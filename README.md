# 📝 TaskForge - Next.js implementation

A fast, modern, and responsive TaskForge application built with Next.js (TypeScript), Tailwind CSS v4, and shadcn/ui, featuring offline persistence via Dexie.js (IndexedDB) and React Query for data synchronization.
The app supports searching, filtering, editing, deleting, pagination, and detailed todo pages — all within a clean, accessible UI.

---

## 🌟 Features

- Add, edit, and delete todos with instant feedback.
- Search todos by title.
- Filter by status: completed / incomplete / all.
- View detailed todo pages (ID, title, and status)
- Offline support using IndexedDB (via Dexie.js).
- Paginated todo list (10 items per page)
- Inline editing & delete confirmation modals
- Dark-themed, accessible UI using **Tailwind v4** + **shadcn/ui**
- Modular and maintainable file-based routing using Next.js App Router.

---

## 🚀 Installation & Setup

### 1. Clone the Repository

git clone https://github.com/ibeO-GH/taskforge-next.git
cd taskforge-next

### 2. Install Dependencies

npm install

### 3. Start Development Server

npm run dev

The app runs locally at http://localhost:3000/ (Next.js default).

---

## 📜 Available Scripts

- npm run dev - Start development Server.
- npm run build - Build the app for production.
- npm run start - Run the production build locally.
- npm run lint - Run ESLint checks.

---

## 🧱 Technology Stack

- Framework - Next.js 16 (App Router)
- Language - TypeScript
- Styling - Tailwind CSS v4 + shadcn/ui
- State & Data - TanStack Query (React Query)
- Database - Dexie.js (IndexedDB offline persistence)
- Deployment – Vercel
- Icons - Lucide React

---

## 🧠 Architecture & Decisions

- Next.js App Router - Provides file-based routing, server components, and better performance.

- React Query - Handles caching, background updates, and mutation efficiently.

- Tailwind v4 + shadcn/ui - Provides design consistency and modern, responsive styling.

- Dexie.js – Enables offline-first data storage and persistence via IndexedDB.

- Error Boundaries - Ensures graceful handling of runtime or route-level errors.

---

## 📡 API & Data Flow

Although designed to use [JSONPlaceholder](https://jsonplaceholder.typicode.com/), for demo data, all CRUD operations are persisted offline using IndexedDB.

- Endpoints (fo reference)

GET /todos

- Fetches a list of todos (limited to 20 items)

GET /todos/:id

- Fetches a single todo by ID.

---

## Query Flow

- useQuery() - Reads todos from IndexedDB

- useMutation() - Handles create/update/delete actions

- On mutation, queries are invalidated to auto-refresh the UI

---

## Local Database (Dexie.js)

- todos: Stores active todo items objects (userId, id, title, completed).
- deletedTodos: Tracks deleted API todos.

CRUD operations are handled in:

- src/db/todoDb.ts
- src/app/page.tsx
- src/app/todos/[id]/page.tsx
- src/components/TodoDetail.tsx

---

## ⚠️ Known Issues

- ❗ No drag-and-drop reordering.

- ❗ No cloud sync – data stored in the browser.

- ❗ IndexedDB data is cleared when browser storage is wiped.

---

## 🔮 Future Improvements

- Drag-and-drop reordering

- Cloud sync via Firebase/Supabase

- Light/Dark theme toggle

- Due dates & priority labels

- Export/import todos as JSON/CSV

- Lazy loading for large datasets

---

## Project Structure

src/
├── app/
│ ├── todos/
│ │ └── [id]/page.tsx
│ ├── error.tsx
│ ├── layout.tsx
│ └── page.tsx
├── components/
│ ├── TodoDetail.tsx
│ ├── ErrorBoundary.tsx
│ └── ui/
├── db/
│ └── todoDb.ts
├── lib/
│ └── utils.ts
├── styles/
│ └── globals.css
└── types/
└── todo.ts

---

## Live Demo

### Hosted on Vercel

---

## Acknowledgments

Next.js Team, shadcn/ui, React Query, Dexie.js, Tailwind CSS, Radix UI

---

## Migration Notes (React + Vite → Next.js)

This version was migrated from React + Vite (TypeScript) to Next.js 16 (App Router) for improved structure and scalability.

Key Changes

- Routing: (React + Vite) - Manual with TanStack Router, (Next.js Version) - File-based routing via src/app.

- Entry Point: (React + Vite) - main.tsx, (Next.js Version) - layout.tsx and page.tsx.

* Build Tool: (React + Vite) - Vite, (Next.js Version) - Next.js (Webpack).

* Dev Port: (React + Vite) - 5173, (Next.js Version) - 3000.

* Metadata: (React + Vite) - index.html head tags, (Next.js Version) - export const metadata in layout.tsx.

* Error Handling: (React + Vite) - Custom ErrorBoundary, (Next.js Version) - Built-in error.tsx + fallback UI.

* Pagination & Data: (React + Vite) -Same logic preserved, (Next.js Version) - Fully compatible via use client components.

* Offline Persistence: (React + Vite) - Dexie.js (same), (Next.js Version) - Dexie.js (migrated with Next.js client hooks).

* Styling: (React + Vite) - Tailwind v4, (Next.js Version) - Tailwind v4 (identical config).

All core logic, UI, pagination, and CRUD behaviors remain exactly the same as the React version — just restructured for Next.js’s App Router.

---

## 🌐 Part of TaskForge Ecosystem

This project is part of the **TaskForge** system.

Explore other implementations:

- Core → https://github.com/ibeO-GH/taskforge
- React → https://github.com/ibeO-GH/taskforge-react
- Vue → https://github.com/ibeO-GH/taskforge-vue
