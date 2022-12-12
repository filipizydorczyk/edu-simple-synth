import React from "react";
import PlaySection from "./components/PlaySection";
import WaveSection from "./components/WaveSection";
import { useSynth } from "./hooks/synth";

function App() {
    const { start, stop, wave, setWave } = useSynth();

    return (
        <>
            <WaveSection wave={wave} onWaveFormChanged={setWave} />
            <PlaySection onStart={start} onStop={stop} />
        </>
    );
}

export default App;
