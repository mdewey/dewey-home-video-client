import { Search } from '@mui/icons-material';
import { Box, TextField } from '@mui/material';
import React, { useMemo } from 'react';
import { useAppSelector } from '../../hooks/redux';
import MovieListItem from './MovieListItem';

function SearchMovies() {
  const [searchTerm, setSearchTerm] = React.useState<string>('');
  const movies = useAppSelector(state => state.allMovies);
  const filteredMovies = useMemo(() => {
    if (!searchTerm) {
      return [...movies]
        .sort((a, b) => Math.random() > 0.5 ? 1 : -1)
        .filter((_, i) => i < 10);
    }
    return movies
      .filter(movie => {
        console.log({
          searchTerm,
          tags: movie.videoTimeStamps.map(ts => ts.description),
          includes: movie.tags.includes(searchTerm)
        });
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          movie.tags.some(t =>
            t.toLowerCase().includes(searchTerm.toLowerCase())) ||
          movie.videoTimeStamps.some(s =>
            s.description.toLowerCase().includes(searchTerm.toLowerCase()));
      });
  }, [movies, searchTerm]);
  return (
    <div className="search-page">
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '1.5rem',
        width: '100%'
      }}>
        <Search sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField
          id="outlined-basic"
          label="Search for a memory"
          variant="outlined"
          onChange={e => setSearchTerm(e.target.value)}
          sx={{ width: '75%' }}
        />
      </Box>


      <ul className='library-list'>
        {filteredMovies.map(movie => (
          <MovieListItem key={movie.id} {...movie} />
        ))}
      </ul>
    </div>
  );
}

export default SearchMovies;