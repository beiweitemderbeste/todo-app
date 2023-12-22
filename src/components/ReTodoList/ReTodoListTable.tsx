import React from "react";

import ReTodoListHeading from "./ReTodoListHeading";
import ReTodoList from "./ReTodoList";

import type { ReTodoListTableProps } from "../../ts/interfaces/ReTodoList/ReTodoListTableProps.interfaces";

const ReTodoListTable: React.FC<ReTodoListTableProps> = (props) => {
  const { tableHeading, todos, setTodos } = props;

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
      <ReTodoListHeading tableHeading={tableHeading} />
      <ReTodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default ReTodoListTable;
