import { createContext, FC, useContext } from "react";
import { Oscilator, useOscilator } from "../hooks/useOscilator";
import { Synth, useSynth } from "../hooks/useSynth";

type SynthContextProps = {
  oscilator: Oscilator;
  synth: Synth;
};

// Just providing no default values since in application there will be always provider
// and I have no intention in writing tests for this educational project
const SynthContext = createContext<SynthContextProps>(undefined!);

const SynthProvider: FC<{ children: JSX.Element[] }> = ({ children }) => {
  const oscilator = useOscilator();
  const synth = useSynth(oscilator);

  return (
    <SynthContext.Provider value={{ oscilator, synth }}>{children}</SynthContext.Provider>
  );
};

const useSynthContext = () => useContext(SynthContext);

export { SynthProvider, useSynthContext };
