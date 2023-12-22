import ReTodoListHeading from "./ReTodoListHeading";
import ReTodoList from "./ReTodoList";

import type { ReTodoListHeadingProps } from "../../ts/interfaces/ReTodoListHeadingProps.interfaces";

export default function ReTodoListTable({ tableHeading, todos, setTodos }: ReTodoListHeadingProps) {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
      <ReTodoListHeading tableHeading={tableHeading}/>
      <ReTodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
