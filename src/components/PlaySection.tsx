import { Button, Paper, Slider } from "@mui/material";
import React from "react";

type PlaySectionProps = {
    volume: number;
    onStart: () => void;
    onStop: () => void;
    onVolumeChanged: (vol: number) => void;
};

function PlaySection({
    onStart,
    onStop,
    volume,
    onVolumeChanged,
}: PlaySectionProps) {
    return (
        <Paper style={{ padding: "1rem" }} elevation={3}>
            <Button onClick={onStart}>Start</Button>
            <Button onClick={onStop}>Stop</Button>
            <Slider
                value={volume}
                onChange={(_, value) => onVolumeChanged(value as number)}
                max={10}
                min={0}
                aria-labelledby="continuous-slider"
            />
        </Paper>
    );
}

export default PlaySection;
