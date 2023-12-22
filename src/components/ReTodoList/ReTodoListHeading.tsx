import { ReTodoListHeadingProps } from "../../ts/interfaces/ReTodoList/ReTodoListHeadingProps.interfaces";

export default function ReTodoListHeading({
  tableHeading,
}: ReTodoListHeadingProps) {
  return (
    <div className="p-4 bg-indigo-500 text-white flex items-center justify-center">
      <h2 className="text-2xl font-bold">{tableHeading}</h2>
    </div>
  );
}
