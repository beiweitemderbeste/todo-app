import { TodoListHeadingProps } from "../../ts/interfaces/TodoList/TodoListHeadingProps.interfaces";

export default function TodoListHeading({
  tableHeading,
}: TodoListHeadingProps) {
  return (
    <div className="p-4 bg-indigo-500 text-white">
      <h2 className="text-2xl font-bold">{tableHeading}</h2>
    </div>
  );
}
