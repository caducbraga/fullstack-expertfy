"use client";
import * as React from 'react';
import Card from '@mui/material/Card';
import { Stack } from '@mui/system';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { searchExpert } from '@/lib/search/search';
import type { Competence } from '@/lib/search/search';
import { Alert, CardContent, CardMedia, InputAdornment } from '@mui/material';
import { MagnifyingGlass as MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr/MagnifyingGlass';
import useSearchStore from '@/store/searchStore';
import { blue } from '@mui/material/colors';

export interface SearchFiltersProps {
  selection: (selection: Competence | null) => void;
}

export function SearchFilters( {selection} : SearchFiltersProps ): React.JSX.Element {
  
  const [suggestions, setSuggestions] = React.useState<Competence[]>([]);

  const { competence, setCompetence } = useSearchStore();

  const [showAlert, setShowAlert] = React.useState<boolean>(false);

  React.useEffect(() => {
    searchExpert.getAllSuggestions().then((data) => {
      if (data) {
        setSuggestions(data);
      }
      else {
        setShowAlert(true);
      }
    });
  }, []);

  const defaultProps = {
    options: suggestions,
    getOptionLabel: (option: Competence | null) => option?.name || '',
  };

  return (
    <Stack spacing={2}>
      {/* Input search */}
      <Card sx={{ p: 2 }}>
        <CardMedia
          sx={{ height: 250 , margin: 'auto', borderRadius: '15px'}}
          component="img"
          src='/logo.png'
          title="expertfy logo"
        />
        <CardContent>
          
          <Autocomplete
            {...defaultProps}
            id="combo-box-demo"
            sx={{margin: 'auto'}}
            value={competence}
            onChange={(event: React.SyntheticEvent, newValue: Competence | null ) => {
              // Pass the selected value to the parent component
              setCompetence(newValue);
              selection(newValue);
              
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Digite Sua Busca"
                variant="standard"
                sx={{ width: '100%' }}
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start">
                      <MagnifyingGlassIcon fontSize="var(--icon-fontSize-md)" />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </CardContent>
      </Card>
      {/* Alert */}
      {showAlert && <Alert severity="error">Erro ao carregar as sugestões de busca</Alert>}
    </Stack>
  );
}
