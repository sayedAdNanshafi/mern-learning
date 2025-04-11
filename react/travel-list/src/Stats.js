export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );
  const x = items.filter((item) => item.packed).length;
  const percentage = Math.round((x / items.length) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything!Ready to go ✈"
          : `👜 You have ${
              items.length
            } items on your list, And you have already
        packed ${x} (${items.length ? percentage : "0"}
        %)`}
      </em>
    </footer>
  );
}
