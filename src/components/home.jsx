import AddTodo from "./add_todo";
import List from "./list_todo";

function Home() {
  return (
    <div className="container">
      <AddTodo />
      <List />
    </div>
  );
}

export default Home;
