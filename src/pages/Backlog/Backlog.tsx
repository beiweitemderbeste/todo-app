import Navbar from "../../components/layout/navigation/Navbar/Navbar";
import TodoListTable from "../../components/TodoList/TodoListTable";

function Backlog() {
  return (
    <>
      <Navbar />
      <TodoListTable tableHeading="backlog" />
    </>
  );
}

export default Backlog;
