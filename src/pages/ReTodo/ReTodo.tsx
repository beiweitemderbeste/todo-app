import Navbar from "../../components/layout/navigation/Navbar/Navbar";
import ReTodoListTable from "../../components/ReTodoList/ReTodoListTable";

function ReTodo() {
  return (
    <>
      <Navbar />
      <ReTodoListTable tableHeading="Daily" />
      <ReTodoListTable tableHeading="Weekly" />
      <ReTodoListTable tableHeading="Monthly" />
    </>
  );
}

export default ReTodo;
