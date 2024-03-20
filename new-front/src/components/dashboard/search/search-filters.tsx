"use client";
import * as React from 'react';
import Card from '@mui/material/Card';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { MagnifyingGlass as MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr/MagnifyingGlass';
import { Box, Stack } from '@mui/system';

import { searchExpert } from '@/lib/search/search';
import type { Competence } from '@/lib/search/search';
import { List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';

export interface SearchFiltersProps {
  selection: (selection: Competence) => void;
}

export function SearchFilters( {selection} : SearchFiltersProps ): React.JSX.Element {
  
  const [inputSearch, setinputSearch] = React.useState('');
  const [suggestions, setSuggestions] = React.useState<Competence[]>([]);


  const handleChangeInputSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setinputSearch(name);

    if (name.length >= 2) {
      const promisse_sug = searchExpert.getSuggestions(name);
      promisse_sug.then((data) => {
        setSuggestions(data);
      });
    }
    else {
      setSuggestions([]);
    }
  };

  //when user clicks on a suggestion, update the search field
  const handleSelectSuggestion = (suggestion: Competence) => {
    //Change the search field name
    setinputSearch(suggestion.name);
    //Call the parent function to update the expert list
    selection(suggestion);
    //Clear the suggestions list
    setSuggestions([]);
  }

  

  return (
    <Stack spacing={2}>
      {/* Input search */}
      <Card sx={{ p: 2 }}>
        <OutlinedInput
          fullWidth
          placeholder="Type your search query..."
          value={inputSearch}
          onChange={handleChangeInputSearch}
          
          startAdornment={
            <InputAdornment position="start">
              <MagnifyingGlassIcon fontSize="var(--icon-fontSize-md)" />
            </InputAdornment>
          }
          sx={{ maxWidth: '500px' }}
        />
      </Card>

      {/* Suggestions List */}
      {suggestions.length > 0 && (
      <Box sx={{ mt: 2, bgcolor: 'primary.main', p: 2, borderRadius: '4px' }}>
        <Typography variant="h6" sx={{ color: 'primary.contrastText', mb: 1 }}>Suggestions:</Typography>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {suggestions.map((suggestion) => (
            <ListItemButton
              key={suggestion.id}
              onClick={() => handleSelectSuggestion(suggestion)}
              sx={{ borderRadius: '4px', marginBottom: '4px' }}
            >
              <ListItemText primary={suggestion.name} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    )}
    </Stack>
    
  );
}
