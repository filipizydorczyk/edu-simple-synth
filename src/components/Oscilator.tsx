import React from "react";
import { Grid, MenuItem, Paper, Select, Slider } from "@mui/material";
import { Line, LineChart, ResponsiveContainer } from "recharts";
import { WaveForm } from "../hooks/synth";
import DoubleNumberInput from "./DoubleNumberInput";

type OscilatorProps = {
  wave: WaveForm;
  volume: number;
  onWaveFormChanged?: (wave: WaveForm) => void;
  onVolumeChanged?: (volume: number) => void;
};

const VOLUME_MULTIPLIER = 100;

function Oscilator({
  wave,
  volume,
  onWaveFormChanged = () => {},
  onVolumeChanged = () => {},
}: OscilatorProps) {
  const Labels: Record<WaveForm, string> = {
    sin: "Sinus Wave",
    noise: "Random noise",
  };

  return (
    <Paper style={{ padding: "1rem", minHeight: 500 }} elevation={3}>
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
          <Slider
            aria-label="Volume"
            orientation="vertical"
            value={volume * VOLUME_MULTIPLIER}
            onChange={(_, value) => {
              onVolumeChanged((value as number) / VOLUME_MULTIPLIER);
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <label>Waveform</label>
          <Select
            value={wave}
            sx={{ width: "100%" }}
            onChange={(event) =>
              onWaveFormChanged(event.target.value as WaveForm)
            }
          >
            {Object.keys(Labels).map((key) => (
              <MenuItem value={key}>{Labels[key as WaveForm]}</MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={3}>
          <DoubleNumberInput
            name="Unison"
            firstValue={0}
            firstUnint="v"
            secondValue={0}
            secondUnint="%"
          />
        </Grid>
        <Grid item xs={3}>
          <DoubleNumberInput
            name="Phase"
            firstValue={0}
            secondValue={0}
            secondUnint="%"
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Oscilator;
