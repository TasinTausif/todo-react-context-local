# ✅ React Todo App (Context + Local Storage)

A simple Todo list application built with **React**, using **Context API** for state management and **browser localStorage** for data persistence.  
Perfect for understanding React state, context, hooks, and client-side data storage.

---

## 🎯 What is this app

- Add, complete, and delete Todo items  
- State managed globally using React Context  
- Todos persist between page reloads thanks to localStorage  
- Minimal dependencies — just React and browser API  

---

## 🛠️ Tech Stack & Tools

| Technology / Tool   | Purpose |
|---------------------|---------|
| React (functional components + hooks) | UI and logic |
| React Context API | Global state management of todos (no prop drilling) |
| localStorage | Persist todo data between sessions |
| JavaScript (ES6+) | Main programming language |
| Optional CSS / Styling | Basic styling (or your chosen CSS) |

---

---

## 🚀 Getting Started

### Prerequisites  
- Node.js (v14 or later recommended)  
- npm or yarn

### Installation & Run  
    ```bash
    git clone https://github.com/TasinTausif/todo-react-context-local.git
    cd theme-switcher
    npm install            
    npm run dev            

## 🧩 How it works

On first load, the app checks localStorage for saved todos.

Todos are stored in the Context state, available anywhere in the app.

After every change (add/delete / toggle), todos are synced to localStorage — so your list remains after page reload.

Components use React hooks (useState, useEffect, useContext) to manage data.
