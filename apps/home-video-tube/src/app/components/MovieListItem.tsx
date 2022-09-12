import { Movie } from '../../store';
import DisplayTags from './DisplayTags';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MovieListItem(movie: Movie) {
  return (
    <Card sx={{
      width: {
        xs: '100%',
        sm: '100%',
        md: '48%',
        lg: '48%',
        xl: '31%'
      }
    }} >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={movie.imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <a href={`/movie/${movie.id}`}>{movie.title}</a>
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"div"}>
          <h3>{movie.length}</h3>
          <DisplayTags tags={movie.tags} />
        </Typography>
      </CardContent>
    </ Card>
  );
}

