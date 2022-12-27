import React from "react";
import { Donut } from "react-dial-knob";

type KnobInputProps = {
  name: string;
  value: number;
  onValueChange?: (value: number) => void;
};

function KnobInput({ name, value, onValueChange = () => {} }: KnobInputProps) {
  return (
    <>
      <label>{name}</label>
      <Donut
        diameter={40}
        min={0}
        max={100}
        step={1}
        value={value}
        theme={{
          donutColor: "#0060df",
        }}
        style={{
          marginTop: "0.5rem",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
        onValueChange={onValueChange}
      />
    </>
  );
}

export default KnobInput;
