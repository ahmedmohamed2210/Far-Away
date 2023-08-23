import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  removeItem,
  onToggleItems,
  onDeleteList,
}) {
  const [sortedBy, setSortedBy] = useState("input");

  let sortedItems;

  if (sortedBy === "input") sortedItems = items;

  if (sortedBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortedBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((teil) => (
          <Item
            item={teil}
            key={teil.id}
            onDeleteItem={removeItem}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortedBy} onChange={(e) => setSortedBy(e.target.value)}>
          <option value="input"> Sort by input order </option>
          <option value="description"> Sort by description </option>
          <option value="packed"> Sort by packed </option>
        </select>
        <button onClick={onDeleteList}>Clear List</button>
      </div>
    </div>
  );
}
