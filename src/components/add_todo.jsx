import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function AddTodo() {
  return (
    <div className="add-todo">
      <TextField id="standard-basic" label="Todo Name" variant="standard" />
      <Button className="btn-add" variant="contained">
        Add
      </Button>
    </div>
  );
}

export default AddTodo;
