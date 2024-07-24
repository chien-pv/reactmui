import { useContext } from "react";
import { TodoContext } from "../contexts/context_todo";
function About() {
  let {
    data,
    action: { updateTodo },
  } = useContext(TodoContext);

  console.log("Context", data);

  return (
    <>
      <h1>About Page</h1>
      <button onClick={updateTodo}>Update TOdo</button>
    </>
  );
}

export default About;
