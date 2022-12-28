import { Button, Grid, Paper, Slider } from "@mui/material";
import React from "react";
import Oscilator from "./Oscilator";
import Envelope from "./Envelope";

type WaveFormComponentsListProps = {};

function WaveFormComponentsList({}: WaveFormComponentsListProps) {
  return (
    <Grid spacing={1} container style={{ textAlign: "center" }}>
      <Grid item xs={6}>
        <Oscilator />
      </Grid>
      <Grid item xs={6}>
        <Envelope />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" fullWidth disableElevation>
          +
        </Button>
      </Grid>
    </Grid>
  );
}

export default WaveFormComponentsList;
