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
            <Oscilator/>
            <Envelope/>
            <LowFrequencyOscillator/>
        </>
    );
}

export default App;
