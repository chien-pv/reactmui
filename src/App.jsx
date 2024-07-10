import "./App.css";
import "./styles/index.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useReducer } from "react";
let initState = [
  {
    id: 1,
    title: "Hoc React",
  },
  {
    id: 2,
    title: "Hoc CSS",
  },
  {
    id: 3,
    title: "Hoc HTML",
  },
  {
    id: 4,
    title: "Hoc SCSS",
  },
];

export default function App() {
  const [listTodo, dispatch] = useReducer(tasksReducer, initState);
  function tasksReducer(todos, action) {
    switch (action.type) {
      case "add":
        let id = todos.length + 1;
        let item = { id, title: action.payload };
        return [...todos, item];
      case "delete":
        return todos.filter((a) => a.id !== action.payload);
      default:
        return todos;
    }
  }
  function handleAdd(text) {
    dispatch({
      type: "add",
      payload: text,
    });
  }

  function handleDelete(id) {
    dispatch({
      type: "delete",
      payload: id,
    });
  }

  return (
    <div className="container">
      <AddTodo handleAdd={handleAdd} />
      <List handleDelete={handleDelete} listTodo={listTodo} />
    </div>
  );
}

function AddTodo({ handleAdd }) {
  let [text, setText] = useState("");

  return (
    <>
      <TextField
        onChange={(event) => {
          setText(event.target.value);
        }}
        value={text}
        id="standard-basic"
        label="Standard"
        variant="standard"
      />
      <Button onClick={() => handleAdd(text)} variant="contained">
        ADD
      </Button>
    </>
  );
}

function List({ listTodo, handleDelete }) {
  let datas = listTodo.map((item, index) => {
    return <ItemTodo handleDelete={handleDelete} key={index} {...item} />;
  });
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Task</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{datas}</TableBody>
      </Table>
    </TableContainer>
  );
}

function ItemTodo({ id, title, handleDelete }) {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell align="right">{id}</TableCell>
      <TableCell align="right">{title}</TableCell>
      <TableCell align="right">
        <Button variant="contained" color="success">
          Edit
        </Button>
        <Button
          onClick={() => handleDelete(id)}
          variant="outlined"
          color="error"
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}
