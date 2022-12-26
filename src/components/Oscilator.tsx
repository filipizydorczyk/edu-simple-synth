import React from "react";
import { Grid, Paper, Slider } from "@mui/material";
import { Line, LineChart, ResponsiveContainer } from "recharts";

type OscilatorProps = {};

function Oscilator({}: OscilatorProps) {
  return (
    <Paper
      style={{ padding: "1rem", margin: "1rem", minHeight: 500 }}
      elevation={3}
    >
      <Grid container spacing={2} height={500} style={{textAlign: "center"}}>
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
          WAVEFORM
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
