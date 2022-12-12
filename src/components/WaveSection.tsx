import React from "react";
import { MenuItem, Paper, Select } from "@mui/material";
import { WaveForm } from "../hooks/synth";

type WaveSectionProps = {
    wave: WaveForm;
    onWaveFormChanged: (wave: WaveForm) => void;
};

const Labels: Record<WaveForm, string> = {
    sin: "Sinus Wave",
    noise: "Random noise",
};

function WaveSection({ wave, onWaveFormChanged }: WaveSectionProps) {
    return (
        <Paper style={{ padding: "1rem" }} elevation={3}>
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
