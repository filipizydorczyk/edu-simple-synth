import React from "react";
import { Button, Grid } from "@mui/material";
import Oscilator from "../components/Oscilator";
import Envelope from "../components/Envelope";
import { useSynthContext } from "../contexts/synth-context";

function WaveFormComponentsList() {
  const { synth } = useSynthContext();

  return (
    <Grid spacing={1} container style={{ textAlign: "center" }}>
      <Grid item xs={6}>
        <Oscilator
          wave={synth.wave}
          volume={synth.volume}
          onWaveFormChanged={synth.setWave}
          onVolumeChanged={synth.setVolume}
        />
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
