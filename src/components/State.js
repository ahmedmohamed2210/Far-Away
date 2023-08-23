export default function State({ items }) {
  if (!items.length)
    return (
      <em className="stats">
        <p>start adding some items in your packing list👜</p>
      </em>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you got everything! ready to go ✈️"
          : `👜you have ${numItems} item on your list, and you already packed ${numPacked} (${percentage}%) `}
      </em>
    </footer>
  );
}
