import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuentity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;
    const newItem = { description, packed: false, quantity, id: Date.now() };
    onAddItems(newItem);
    setQuentity(1);
    setDescription("");
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => {
          setQuentity(Number(e.target.value));
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
