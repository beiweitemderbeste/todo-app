export default function TodoListHeading({ tableHeading }: { tableHeading: string }) {
  return (
    <div className="p-4 bg-indigo-500 text-white flex items-center justify-center">
      <h2 className="text-2xl font-bold">{tableHeading}</h2>
    </div>
  );
}
