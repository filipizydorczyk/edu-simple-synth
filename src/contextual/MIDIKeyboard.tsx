import React, { FC } from "react";
import { Button, Paper } from "@mui/material";
import { useSynthContext } from "../contexts/synth-context";

const MIDIKeyboard: FC<{ className?: string; style?: React.CSSProperties }> = ({
  className,
  style,
}) => {
  const { synth } = useSynthContext();
  // Goal for this component is to make midi keybord but for now it just store play button
  return (
    <Paper
      className={className}
      style={{ width: "100%", padding: "1rem", ...style }}
    >
      <div style={{ display: "block", margin: "0 auto", width: "max-content" }}>
        <Button onClick={synth.start}>Play</Button>
        <Button onClick={synth.stop}>Stop</Button>
      </div>
    </Paper>
  );
};

export default MIDIKeyboard;
