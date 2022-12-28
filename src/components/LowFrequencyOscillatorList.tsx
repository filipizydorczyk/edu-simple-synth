import React from "react";
import { Button, Grid } from "@mui/material";
import LowFrequencyOscillator from "./LowFrequencyOscillator";

function LowFrequencyOscillatorList() {
  return (
    <Grid container spacing={1} style={{ textAlign: "center" }}>
      <Grid item xs={12}>
        <LowFrequencyOscillator />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" fullWidth disableElevation>
          +
        </Button>
      </Grid>
    </Grid>
  );
}

export default LowFrequencyOscillatorList;
