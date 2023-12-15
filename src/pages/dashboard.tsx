import Navbar from "../components/layout/navigation/Navbar/Navbar";
import TodoListTable from "../components/TodoList/TodoListTable";

const Dashboard: React.FC = () => {
  return (
    <>
      <Navbar />
      <TodoListTable />
    </>
  );
};

export default Dashboard;
