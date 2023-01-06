import { Grid } from "@mui/material";
import React from "react";
import LowFrequencyOscillatorList from "./contextual/LowFrequencyOscillatorList";
import WaveFormComponentsList from "./contextual/WaveFormComponentsList";
import { SynthProvider } from "./contexts/synth-context";
import MIDIKeyboard from "./contextual/MIDIKeyboard";


function App() {
  return (
    <SynthProvider>
      <Grid container spacing={1} style={{ textAlign: "center" }}>
        <Grid item xs={8}>
          <WaveFormComponentsList/>
        </Grid>
        <Grid item xs={4}>
          <LowFrequencyOscillatorList />
        </Grid>
      </Grid>
      <MIDIKeyboard style={{position:"absolute", bottom: 0, left: 0}}/>
    </SynthProvider>
  );
}

export default App;
