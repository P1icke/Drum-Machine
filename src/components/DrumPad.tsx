import {Button} from "@mui/material";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store/store.ts";
import {updateLastPlayed} from "../store/drumSlice.ts";
import React, {useEffect} from "react";

type DrumPadProps = {
  id: string
  inputKey: string;
  soundName: string;
  audioFile: string;
}

const DrumPad = (props: DrumPadProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const handleInput = () => {
    dispatch(updateLastPlayed(props.soundName));
    if (audioRef.current) {
      audioRef.current.play();
    }
  }

  useEffect(() => {
    const handleKeyboardInput = (event: KeyboardEvent) => {
      const key = event.key.toUpperCase();
      if (key === props.inputKey) {
        handleInput()
      }
    }

    window.addEventListener('keydown', handleKeyboardInput);

    return () => {
      window.removeEventListener('keydown', handleKeyboardInput);
    }
  })

  return (
    <Button
      className="drum-pad"
      id={props.soundName}
      variant="contained"
      onClick={handleInput}
      sx={{
        width: '100%',
        height: '100%',
        padding: '2px',
        fontSize: '12px',
      }}
    >
      {props.inputKey}
      <audio className="clip" id={props.inputKey} ref={audioRef} src={props.audioFile} />
    </Button>
  )
}

export default DrumPad;