import { createContext, FC, useContext } from "react";
import { Synth, useSynth } from "../hooks/synth";

type SynthContextProps = {
  synth: Synth;
};

// Just providing no default values since in application there will be always provider
// and I have no intention in writing tests for this educational project
const SynthContext = createContext<SynthContextProps>(undefined!);

const SynthProvider: FC<{ children: JSX.Element[] }> = ({ children }) => {
  const synth = useSynth();

  return (
    <SynthContext.Provider value={{ synth }}>{children}</SynthContext.Provider>
  );
};

const useSynthContext = () => useContext(SynthContext);

export { SynthProvider, useSynthContext };
