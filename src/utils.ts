import { WaveForm } from "./hooks/useOscilator";

export const WaveFromFunctions: Record<WaveForm, (input: number) => number> = {
    sin: Math.sin,
    noise: (_) => 1 - Math.random() * 2,
};
