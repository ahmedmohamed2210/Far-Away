export default function Item({ item, onDeleteItem, onToggleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItems(item.id)}
      />
      <div style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </div>

      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
