export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <footer className="stats">
        <em>You should packing your bags!⏰</em>
      </footer>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : ` You have ${numItems} items on your list and you are ${
              numPacked === 0
                ? `nothings packed yet`
                : `already packed ${numPacked} (${percentage} %)`
            }`}
      </em>
    </footer>
  );
}
