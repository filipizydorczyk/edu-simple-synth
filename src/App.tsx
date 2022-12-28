import { Grid } from "@mui/material";
import React from "react";
import LowFrequencyOscillatorList from "./components/LowFrequencyOscillatorList";
import WaveFormComponentsList from "./components/WaveFormComponentsList";
import { useSynth } from "./hooks/synth";

function App() {
  const { start, stop, wave, setWave, volume, setVolume } = useSynth();

  return (
    <>
      {/* <WaveSection wave={wave} onWaveFormChanged={setWave} />
            <PlaySection
                onStart={start}
                onStop={stop}
                onVolumeChanged={(val) => setVolume(val / 10)}
                volume={volume * 10}
            /> */}
      <Grid container spacing={1} style={{ textAlign: "center" }}>
        <Grid item xs={8}>
          <WaveFormComponentsList/>
        </Grid>
        <Grid item xs={4}>
          <LowFrequencyOscillatorList />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
