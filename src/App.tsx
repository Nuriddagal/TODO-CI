import { useState } from "react";
import Todo from "./Todo";

export default function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim()) {
      setTodos([...todos, text]);
      setText("");
    }
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New task"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((t, i) => (
          <Todo key={i} text={t} />
        ))}
      </ul>
    </div>
  );
}