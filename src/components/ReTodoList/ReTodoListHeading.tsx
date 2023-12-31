export default function ReTodoListHeading({ tableHeading }: { tableHeading: string }) {
  return (
    <div className="p-4 bg-indigo-500 text-white flex items-center justify-center">
      <h2 className="text-2xl font-bold">{tableHeading} Todos</h2>
    </div>
  );
}
