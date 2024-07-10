import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function Item({ title, des, status }) {
  count = count + 1;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <h2>{count}</h2>
        </Grid>
        <Grid item xs={2}>
          <h2>{title}</h2>
        </Grid>

        <Grid item xs={5}>
          <p>{des}</p>
        </Grid>

        <Grid item xs={5}>
          {status == "done" && (
            <FormControlLabel control={<Checkbox defaultChecked />} />
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Item;
