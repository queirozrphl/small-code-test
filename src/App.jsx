import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DetailsPage from './pages/DetailsPage';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box'; // Usado para aplicar fundo

// Cria um tema básico (pode ser customizado depois)
const theme = createTheme({
  palette: {
    // Exemplo: Definir cores primárias e secundárias
    // primary: {
    //   main: '#ffa000', // Um laranja/âmbar
    // },
    // secondary: {
    //   main: '#757575', // Um cinza
    // },
    // mode: 'light', // ou 'dark'
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normaliza estilos e aplica fontes/fundo do tema */}
      {/* Usando Box para garantir que o fundo do tema cubra tudo */}
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            {/* Parameter name ':gameId' is kept, good practice even if using state */}
            <Route path="/details/:gameId" element={<DetailsPage />} />
            {/* Add other routes here if needed */}
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App; 