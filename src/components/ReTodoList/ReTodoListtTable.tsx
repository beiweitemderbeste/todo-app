import ReTodoListHeading from "./ReTodoListHeading";
import ReTodoList from "./ReTodoList";

export default function ReTodoListTable() {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
      <ReTodoListHeading />
      <ReTodoList />
    </div>
  );
}
