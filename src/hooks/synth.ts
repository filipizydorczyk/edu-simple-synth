import { useState } from "react";
import { WaveFromFunctions } from "../utils";

export const SAMPLE_RATE = 44100;
export const DURATION = 5;
export const FREQUENCY = 440;

export const NUM_SAMPLES = SAMPLE_RATE * DURATION;

export type WaveForm = "sin" | "noise";

/**
 * I am ingoring warning
 *
 * > An AudioContext was prevented from starting automatically. It must be created or resumed after a user gesture on the page.
 *
 * because what is not allowed is starting/resuming the context without a user gesture not to create the context without a user gesture
 * @return object with funtions to interact with synth
 */
export const useSynth = () => {
    const [audioSource, setAudioSource] = useState<AudioBufferSourceNode>();
    const [waveFromFn, setWaveFromFn] = useState<WaveForm>("sin");
    const [volume, setVolume] = useState(1);

    const samples = new Float32Array(NUM_SAMPLES);

    for (let i = 0; i < NUM_SAMPLES; i++) {
        samples[i] =
            WaveFromFunctions[waveFromFn](
                (2 * Math.PI * FREQUENCY * i) / SAMPLE_RATE
            ) * volume;
    }

    const audioCtx = new AudioContext();
    const audioBuffer = audioCtx.createBuffer(1, NUM_SAMPLES, SAMPLE_RATE);
    const audioData = audioBuffer.getChannelData(0);

    for (let i = 0; i < NUM_SAMPLES; i++) {
        audioData[i] = samples[i];
    }

    const start = () => {
        const source = audioCtx.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioCtx.destination);
        source.start();

        if (audioSource) {
            audioSource.stop();
        }

        setAudioSource(source);
    };

    const stop = () => {
        audioSource?.stop();
    };

    return {
        start,
        stop,
        wave: waveFromFn,
        setWave: setWaveFromFn,
        volume,
        setVolume,
    };
};
