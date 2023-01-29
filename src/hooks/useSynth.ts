import { useState } from "react";
import { NUM_SAMPLES, SAMPLE_RATE, Oscilator } from "./useOscilator";

export type Synth = {
  start: () => void;
  stop: () => void;
};

/**
 * I am ingoring warning
 *
 * > An AudioContext was prevented from starting automatically. It must be created or resumed after a user gesture on the page.
 *
 * because what is not allowed is starting/resuming the context without a user gesture not to create the context without a user gesture
 * @return object with funtions to interact with synth
 */
export const useSynth = (oscilator: Oscilator): Synth => {
  const [audioSource, setAudioSource] = useState<AudioBufferSourceNode>();

  const start = () => {
    const audioCtx = new AudioContext();
    const audioBuffer = audioCtx.createBuffer(1, NUM_SAMPLES, SAMPLE_RATE);
    const audioData = audioBuffer.getChannelData(0);

    for (let i = 0; i < NUM_SAMPLES; i++) {
      audioData[i] = oscilator.samples[i];
    }
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
  };
};
