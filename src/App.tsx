import './App.css'
import {Box, Container} from "@mui/material";
import DrumMachine from "./components/DrumMachine.tsx";

function App() {

  return (
    <Container>
      <Box
        sx={{
          maxWidth: '400px',
          maxHeight: '500px',
          margin: 'auto',
          padding: '10px',
          border: '1px solid #ccc'
        }}>
        <DrumMachine/>
      </Box>
    </Container>
  )
}

export default App
