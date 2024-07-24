import Button from "@mui/material/Button";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/actions";

function ItemTodo({ id, title }) {
  let dispatch = useDispatch();
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell align="right">{id}</TableCell>
      <TableCell align="right">{title}</TableCell>
      <TableCell align="right">
        <Button variant="contained" color="success">
          Edit
        </Button>
        <Button
          onClick={() => {
            dispatch(deleteTodo(id));
          }}
          variant="outlined"
          color="error"
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default ItemTodo;
