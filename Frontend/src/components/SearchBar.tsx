// components/SearchBar.tsx
import { TextField, Box } from '@mui/material';
import { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Implement search logic (e.g., call API to fetch books based on search term)
  };

  return (
    <Box mb={2}>
      <TextField
        label="Search for books"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()} // Search on Enter key
        fullWidth
      />
    </Box>
  );
};

export default SearchBar;
