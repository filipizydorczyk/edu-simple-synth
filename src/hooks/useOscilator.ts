import { useEffect, useState } from "react";
import { WaveFromFunctions } from "../utils";

export const SAMPLE_RATE = 44100;
export const DURATION = 5;
export const FREQUENCY = 440;
export const NUM_SAMPLES = SAMPLE_RATE * DURATION;

export type WaveForm = "sin" | "noise";
export type Oscilator = {
  wave: [WaveForm, React.Dispatch<React.SetStateAction<WaveForm>>];
  volume: [number, React.Dispatch<React.SetStateAction<number>>];
  samples: Float32Array;
};

export const useOscilator = (): Oscilator => {
  const [waveFromFn, setWaveFromFn] = useState<WaveForm>("sin");
  const [volume, setVolume] = useState(1);
  const [samples, setSamples] = useState(new Float32Array(NUM_SAMPLES));

  useEffect(() => {
    const newSamples = new Float32Array(NUM_SAMPLES);

    for (let i = 0; i < NUM_SAMPLES; i++) {
      newSamples[i] =
        WaveFromFunctions[waveFromFn](
          (2 * Math.PI * FREQUENCY * i) / SAMPLE_RATE
        ) * volume;
    }

    setSamples(newSamples);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [waveFromFn, volume]);

  return {
    wave: [waveFromFn, setWaveFromFn],
    volume: [volume, setVolume],
    samples,
  };
};
