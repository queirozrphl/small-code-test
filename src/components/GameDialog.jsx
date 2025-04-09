import React from 'react';
import { Link as RouterLink } from 'react-router-dom'; // Renomeia para evitar conflito
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link'; // MUI Link para estilo

function GameDialog({ isOpen, onClose, game }) {

  // // --- ERROR SIMULATION ---
  // // If the dialog is supposed to be open, throw an error immediately.
  // if (isOpen) {
  //   throw new Error("Simulated Error: Failed to process data for the dialog!");
  // }
  // // --- END ERROR SIMULATION ---

  // if (!game) return null; // Evita erro se o jogo não for passado

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="game-dialog-title"
      aria-describedby="game-dialog-description"
    >
      <DialogTitle id="game-dialog-title">
        {game.title} - Overview
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="game-dialog-description" component="div"> {/* Usar component="div" para permitir outros elementos dentro */}
          <Typography variant="body2" color="text.secondary" gutterBottom>
            <strong>Genre(s):</strong> {game.genre.join(', ')}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            <strong>Developer:</strong> {game.developer}
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}> {/* Adiciona margem superior */}
            {game.description.substring(0, 150)}...
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
        {/* Usando RouterLink para navegação e MUI Link para estilo */}
        <Button
          component={RouterLink} // Faz o Button se comportar como um RouterLink
          to={`/details/${game.id}`}
          state={{ gameData: game }} // Passa os dados via state
          onClick={onClose} // Fecha o modal ao navegar
          variant="contained" // Estilo de botão preenchido
          color="primary"
        >
          View Full Details
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default GameDialog; 