import React, { useState } from 'react';
import GameDialog from '../components/GameDialog';
import { pathOfExile2 } from '../gameData';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function MainPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const game = pathOfExile2;

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Game Information
      </Typography>

      <Card sx={{ maxWidth: 600, mx: 'auto' }}>
        <CardMedia
          component="img"
          sx={{ height: 280, objectFit: 'contain', pt: 2 }}
          image={game.imageUrl}
          alt={`Cover art for ${game.title}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {game.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            <strong>Platforms:</strong> {game.platforms.join(', ')}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            A quick look at {game.title}. Click below for more details.
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
            <Button
               size="large"
               variant="contained"
               onClick={openDialog}
             >
              Open Details
            </Button>
          </CardActions>
      </Card>

      <GameDialog
        isOpen={isDialogOpen}
        onClose={closeDialog}
        game={game}
      />
    </Container>
  );
}

export default MainPage; 