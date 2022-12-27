import React from "react";
import { Grid, MenuItem, Paper, Select, Slider } from "@mui/material";
import { Line, LineChart, ResponsiveContainer } from "recharts";
import { WaveForm } from "../hooks/synth";

type OscilatorProps = {};

function Oscilator({}: OscilatorProps) {
  
  const Labels: Record<WaveForm, string> = {
    sin: "Sinus Wave",
    noise: "Random noise",
  };

  return (
    <Paper
      style={{ padding: "1rem", margin: "1rem", minHeight: 500 }}
      elevation={3}
    >
      <Grid container spacing={2} height={500} style={{ textAlign: "center" }}>
        <Grid item xs={11}>
          <ResponsiveContainer height="100%" width="100%">
            <LineChart
              data={[
                { sample: 5 },
                { sample: 1 },
                { sample: 0 },
                { sample: 1 },
                { sample: 4 },
              ]}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <Line type="monotone" dataKey="sample" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </Grid>
        <Grid item xs={1}>
          <Slider aria-label="Volume" orientation="vertical" />
        </Grid>
        <Grid item xs={6}>
          <Select
            value="sin"
            sx={{ m: 1, width: "100%" }}
            // onChange={(event) =>
            //     onWaveFormChanged(event.target.value as WaveForm)
            // }
          >
            {Object.keys(Labels).map((key) => (
              <MenuItem value={key}>{Labels[key as WaveForm]}</MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={3}>
          UNISON
        </Grid>
        <Grid item xs={3}>
          PHASE
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Oscilator;
