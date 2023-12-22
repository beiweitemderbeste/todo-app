export default function TodoListHeading({ tableHeading }: { tableHeading: string }) {
  return (
    <div className="p-4 bg-indigo-500 text-white">
      <h2 className="text-2xl font-bold">{tableHeading}</h2>
    </div>
  );
}
