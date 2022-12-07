import React from "react";
import { useSynth } from "./synth";

function App() {
    const { start, stop } = useSynth();

    return (
        <>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
        </>
    );
}

export default App;
