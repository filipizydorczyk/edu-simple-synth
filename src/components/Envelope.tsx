import React from "react";
import { Grid, Paper, Slider } from "@mui/material";
import { Line, LineChart, ResponsiveContainer } from "recharts";

type EnvelopeProps = {};

function Envelope({}: EnvelopeProps) {
  return (
    <Paper
      style={{ padding: "1rem", margin: "1rem", minHeight: 500 }}
      elevation={3}
    >
      <Grid container spacing={2} height={500} style={{textAlign: "center"}}>
        <Grid item xs={12}>
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
        <Grid item xs={2}>
          Delay
        </Grid>
        <Grid item xs={2}>
          Attack
        </Grid>
        <Grid item xs={2}>
          Hold
        </Grid>
        <Grid item xs={2}>
          Decay
        </Grid>
        <Grid item xs={2}>
          Sustain
        </Grid>
        <Grid item xs={2}>
          Release
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Envelope;
