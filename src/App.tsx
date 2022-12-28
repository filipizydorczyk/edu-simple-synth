import { Grid } from "@mui/material";
import React from "react";
import Envelope from "./components/Envelope";
import LowFrequencyOscillator from "./components/LowFrequencyOscillator";
import Oscilator from "./components/Oscilator";
import PlaySection from "./components/PlaySection";
import WaveSection from "./components/WaveSection";
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
        <Grid item xs={4}>
          <Oscilator />
        </Grid>
        <Grid item xs={4}>
          <Envelope />
        </Grid>
        <Grid item xs={4}>
          <LowFrequencyOscillator />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
