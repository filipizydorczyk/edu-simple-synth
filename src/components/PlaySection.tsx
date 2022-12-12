import { Button, Paper } from "@mui/material";
import React from "react";

type PlaySectionProps = {
    onStart: () => void;
    onStop: () => void;
};

function PlaySection({ onStart, onStop }: PlaySectionProps) {
    return (
        <Paper style={{ padding: "1rem" }} elevation={3}>
            <Button onClick={onStart}>Start</Button>
            <Button onClick={onStop}>Stop</Button>
        </Paper>
    );
}

export default PlaySection;
