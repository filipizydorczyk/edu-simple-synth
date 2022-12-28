import React from "react";
import { Grid, TextField } from "@mui/material";

type DoubleNumberInputProps = {
  name: string;
  firstValue: number;
  firstUnint?: string;
  secondValue: number;
  secondUnint?: string;
};

function DoubleNumberInput({
  name,
  firstValue,
  firstUnint,
  secondValue,
  secondUnint,
}: DoubleNumberInputProps) {
  return (
    <>
      <label>{name}</label>

      <Grid container spacing={1} style={{ textAlign: "center" }}>
        <Grid item xs={6}>
          <TextField label={firstUnint} variant="outlined" value={firstValue} />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label={secondUnint}
            variant="outlined"
            value={secondValue}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default DoubleNumberInput;
