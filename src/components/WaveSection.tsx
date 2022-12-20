import React, { useEffect, useState } from "react";
import { MenuItem, Paper, Select } from "@mui/material";
import { FREQUENCY, NUM_SAMPLES, SAMPLE_RATE, WaveForm } from "../hooks/synth";
import { Line, LineChart } from "recharts";
import { WaveFromFunctions } from "../utils";

type WaveSectionProps = {
    wave: WaveForm;
    onWaveFormChanged: (wave: WaveForm) => void;
};

const Labels: Record<WaveForm, string> = {
    sin: "Sinus Wave",
    noise: "Random noise",
};

function WaveSection({ wave, onWaveFormChanged }: WaveSectionProps) {
    const [samples, setSamples] = useState<any>([]);

    useEffect(() => {
        const newArray = [];

        for (let i = 0; i < NUM_SAMPLES; i += 5000) {
            newArray.push({
                sample:
                    WaveFromFunctions[wave](
                        (2 * Math.PI * FREQUENCY * i) / SAMPLE_RATE
                    ) * 100,
            });
        }

        setSamples(newArray);
        console.log(newArray, NUM_SAMPLES);
    }, [wave]);

    return (
        <Paper style={{ padding: "1rem" }} elevation={3}>
            <LineChart
                width={500}
                height={300}
                data={samples}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <Line type="monotone" dataKey="sample" stroke="#82ca9d" />
            </LineChart>

            <Select
                value={wave}
                onChange={(event) =>
                    onWaveFormChanged(event.target.value as WaveForm)
                }
            >
                {Object.keys(Labels).map((key) => (
                    <MenuItem value={key}>{Labels[key as WaveForm]}</MenuItem>
                ))}
            </Select>
        </Paper>
    );
}

export default WaveSection;
