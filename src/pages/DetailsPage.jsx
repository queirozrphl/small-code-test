import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import CircleIcon from '@mui/icons-material/Circle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function DetailsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const game = location.state?.gameData;

  if (!game) {
    return (
      <Container maxWidth="sm" sx={{ textAlign: 'center', py: 4 }}>
        <Typography color="error" variant="h6" gutterBottom>
          Game data not found.
        </Typography>
        <Button variant="contained" onClick={() => navigate('/')}>
          Back to Home Page
        </Button>
      </Container>
    );
  }

  const goBack = () => {
    navigate(-1);
  };

  const formatDate = (dateString) => {
    if (!dateString || dateString === "TBA") return "TBA";
    if (dateString.includes("(Target)")) return dateString;
    try {
      const date = new Date(dateString + 'T00:00:00');
      if (!isNaN(date.getTime())) {
        return date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
      }
    } catch (e) { /* ignore */ }
    return dateString;
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={goBack}
        sx={{ mb: 2 }}
        variant="outlined"
      >
        Back
      </Button>

      <Paper elevation={3} sx={{ p: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Typography variant="h3" component="h1" gutterBottom>
              {game.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              <strong>Genre(s):</strong> {game.genre.join(', ')}
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              <strong>Platforms:</strong> {game.platforms.join(', ')}
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              <strong>Release Date:</strong> {formatDate(game.releaseDate.original)}
            </Typography>
            {game.releaseDate.beta && (
              <Typography variant="body1" color="text.secondary" gutterBottom>
                <strong>Beta Target:</strong> {formatDate(game.releaseDate.beta)}
              </Typography>
            )}
            <Typography variant="body1" color="text.secondary" gutterBottom>
              <strong>Developer:</strong> {game.developer}
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              <strong>Publisher:</strong> {game.publisher}
            </Typography>

            <Typography variant="h5" component="h2" sx={{ mt: 4, mb: 1 }}>
              Description
            </Typography>
            <Typography variant="body1" paragraph sx={{ whiteSpace: 'pre-line' }}>
              {game.description}
            </Typography>

            <Typography variant="h5" component="h2" sx={{ mt: 3, mb: 1 }}>
              Features
            </Typography>
            <List dense>
                {game.features.map((feature, index) => (
                <ListItem key={index} disableGutters>
                    <ListItemIcon sx={{ minWidth: 'auto', mr: 1 }}>
                        <CircleIcon sx={{ fontSize: '0.6rem' }} />
                    </ListItemIcon>
                    <ListItemText primary={feature} />
                </ListItem>
                ))}
            </List>

            <Typography variant="h5" component="h2" sx={{ mt: 3, mb: 1 }}>
              Ratings
            </Typography>
            <Typography variant="body1" color="text.secondary">
              <strong>ESRB:</strong> {game.ratings.esrb}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              <strong>PEGI:</strong> {game.ratings.pegi}
            </Typography>

            <Link
              href={game.website}
              target="_blank"
              rel="noopener noreferrer"
              component={Button}
              variant="contained"
              sx={{ mr: 2 }}
            >
              Visit Official Website
            </Link>
            <Button
                startIcon={<ArrowBackIcon />}
                onClick={goBack}
                variant="outlined"
            >
                Back
            </Button>

          </Grid>
          <Grid item xs={12} md={4}>
             <Box
                component="img"
                sx={{
                    width: '100%',
                    maxWidth: 300,
                    height: 'auto',
                    borderRadius: 1,
                    boxShadow: 3,
                    display: 'block',
                    mx: 'auto',
                    mt: { xs: 2, md: 0 }
                }}
                src={game.imageUrl}
                alt={`Cover art for ${game.title}`}
            />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default DetailsPage; 