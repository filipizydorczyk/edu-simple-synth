import React from "react";
import { Grid, Paper, Slider } from "@mui/material";
import { Donut } from "react-dial-knob";
import { Line, LineChart, ResponsiveContainer } from "recharts";
import KnobInput from "./KnobInput";

type EnvelopeProps = {};

function Envelope({}: EnvelopeProps) {
  return (
    <Paper
      style={{ padding: "1rem", minHeight: 500 }}
      elevation={3}
    >
      <Grid container spacing={2} height={500} style={{ textAlign: "center" }}>
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
          <KnobInput name="Delay" value={15} />
        </Grid>
        <Grid item xs={2}>
          <KnobInput name="Attack" value={15} />
        </Grid>
        <Grid item xs={2}>
          <KnobInput name="Hold" value={15} />
        </Grid>
        <Grid item xs={2}>
          <KnobInput name="Decay" value={15} />
        </Grid>
        <Grid item xs={2}>
          <KnobInput name="Sustain" value={15} />
        </Grid>
        <Grid item xs={2}>
          <KnobInput name="Release" value={15} />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Envelope;
