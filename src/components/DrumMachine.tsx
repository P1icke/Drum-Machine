import React from "react";
import {Grid2, Paper} from "@mui/material";
import { useSelector } from 'react-redux';
import {RootState} from "../store/store.ts";
import DrumPad from "./DrumPad.tsx";

const AUDIO_FILE_Q = 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3';
const AUDIO_FILE_W = 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3';
const AUDIO_FILE_E = 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3';
const AUDIO_FILE_A = 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3';
const AUDIO_FILE_S = 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3';
const AUDIO_FILE_D = 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3';
const AUDIO_FILE_Z = 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3';
const AUDIO_FILE_X = 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3';
const AUDIO_FILE_C = 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3';

const DrumMachine: React.FC = () => {
  const lastPlayed = useSelector((state: RootState) => state.drum.lastPlayed);

  return (
    <Grid2 id="drum-machine" container spacing={1}>
      <Grid2 size={12}>
        <Paper
          id="display"
          sx={{
            height: '60px', // Set a fixed height
            minHeight: '60px',
            minWidth: '100px',
            textAlign: 'center',
            padding: '10px',
            overflow: 'hidden', // Prevent overflow if text is too long
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {lastPlayed}
        </Paper>
      </Grid2>
      <Grid2 size={4} sx={{ aspectRatio: '1 / 1' }}>
        <DrumPad id="drum-pad-q" inputKey={"Q"} soundName={"Heater 1"} audioFile={AUDIO_FILE_Q} />
      </Grid2>
      <Grid2 size={4} sx={{ aspectRatio: '1 / 1' }}>
        <DrumPad id="drum-pad-w" inputKey={"W"} soundName={"Heater 2"} audioFile={AUDIO_FILE_W} />
      </Grid2>
      <Grid2 size={4} sx={{ aspectRatio: '1 / 1' }}>
        <DrumPad id="drum-pad-e" inputKey={"E"} soundName={"Heater 3"} audioFile={AUDIO_FILE_E} />
      </Grid2>
      <Grid2 size={4} sx={{ aspectRatio: '1 / 1' }}>
        <DrumPad id="drum-pad-a" inputKey={"A"} soundName={"Heater 4"} audioFile={AUDIO_FILE_A} />
      </Grid2>
      <Grid2 size={4} sx={{ aspectRatio: '1 / 1' }}>
        <DrumPad id="drum-pad-s" inputKey={"S"} soundName={"Clap"} audioFile={AUDIO_FILE_S} />
      </Grid2>
      <Grid2 size={4} sx={{ aspectRatio: '1 / 1' }}>
        <DrumPad id="drum-pad-d" inputKey={"D"} soundName={"Open-HH"} audioFile={AUDIO_FILE_D} />
      </Grid2>
      <Grid2 size={4} sx={{ aspectRatio: '1 / 1' }}>
        <DrumPad id="drum-pad-z" inputKey={"Z"} soundName={"Kick-n'-Hat"} audioFile={AUDIO_FILE_Z} />
      </Grid2>
      <Grid2 size={4} sx={{ aspectRatio: '1 / 1' }}>
        <DrumPad id="drum-pad-x" inputKey={"X"} soundName={"Kick"} audioFile={AUDIO_FILE_X} />
      </Grid2>
      <Grid2 size={4} sx={{ aspectRatio: '1 / 1' }}>
        <DrumPad id="drum-pad-c" inputKey={"C"} soundName={"Closed-HH"} audioFile={AUDIO_FILE_C} />
      </Grid2>
    </Grid2>
  )
}

export default DrumMachine;