"use client";
import * as React from 'react';
import Card from '@mui/material/Card';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { MagnifyingGlass as MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr/MagnifyingGlass';
import { Stack } from '@mui/system';

import { searchExpert } from '@/lib/search/search';
import type { Competence } from '@/lib/search/search';

export interface SearchFiltersProps {
  selection: (selection: Competence) => void;
}

export function SearchFilters( {selection} : SearchFiltersProps ): React.JSX.Element {
  
  const [handlechange, setHandleChange] = React.useState('');
  const [suggestions, setSuggestions] = React.useState<Competence[]>([]);
  const [selectedSuggestion, setSelectedSuggestion] = React.useState<Competence | null>(null); //sugestão selecionada pelo usuário


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setHandleChange(name);

    if (name.length >= 2) {
      const promisse_sug = searchExpert.getSuggestions(name);
      promisse_sug.then((data) => {
        setSuggestions(data);
      });
    }
  };

  //when user clicks on a suggestion, update the search field
  const handleSelectSuggestion = (suggestion: Competence) => {
    setHandleChange(suggestion.name);
    setSelectedSuggestion(suggestion);
    selection(suggestion);
    setSuggestions([]);
  }

  return (
    <Stack spacing={2}>
      <Card sx={{ p: 2 }}>
        <OutlinedInput
          fullWidth
          placeholder="Type your search query..."
          value={handlechange}
          onChange={handleChange}
          startAdornment={
            <InputAdornment position="start">
              <MagnifyingGlassIcon fontSize="var(--icon-fontSize-md)" />
            </InputAdornment>
          }
          sx={{ maxWidth: '500px' }}
        />

      </Card>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 2 }}>
        <ul>
          {suggestions.map((suggestion) => (
            <li key={suggestion.id}
              onClick={() => handleSelectSuggestion(suggestion)}>{suggestion.name}</li>
          ))}
        </ul>
      </Stack>
    </Stack>
    
  );
}
