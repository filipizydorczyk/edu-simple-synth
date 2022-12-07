import { useState } from "react";

export const SAMPLE_RATE = 44100;
export const DURATION = 5;
export const FREQUENCY = 440;

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

    const numSamples = SAMPLE_RATE * DURATION;
    const samples = new Float32Array(numSamples);

    for (let i = 0; i < numSamples; i++) {
        samples[i] = Math.sin((2 * Math.PI * FREQUENCY * i) / SAMPLE_RATE);
    }

    const audioCtx = new AudioContext();
    const audioBuffer = audioCtx.createBuffer(1, numSamples, SAMPLE_RATE);
    const audioData = audioBuffer.getChannelData(0);

    for (let i = 0; i < numSamples; i++) {
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

    return { start, stop };
};
