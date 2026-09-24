import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}

function Form() {
  const [description, setDescription] = useState("");
  const [count, setCount] = useState(1);

  if (!description) {
    return;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = { description, count, packed: false, id: Date.now() };

    setDescription("");
    setCount(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your ✈ trip?</h3>
      <select value={count} onChange={(e) => setCount(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((count) => (
          <option value={count} key={count}>
            {count}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul className="list">
        {initialItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>

      <button> ❌ </button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>💼 You h ve X items on you list, and you already packed X (X%)</em>
    </footer>
  );
}
