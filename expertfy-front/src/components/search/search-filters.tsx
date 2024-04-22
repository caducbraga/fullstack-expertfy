"use client";
import * as React from 'react';
import Card from '@mui/material/Card';
import { Stack } from '@mui/system';
import { styled } from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { searchExpert } from '@/lib/search/search';
import type { Competence } from '@/lib/search/search';
import { Alert, Button, CardActions, CardContent, CardMedia, Collapse, Divider, FormControl, Grid, IconButton, IconButtonProps, InputAdornment, InputLabel, Select, Typography } from '@mui/material';
import { MagnifyingGlass as MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr/MagnifyingGlass';
import useSearchStore from '@/store/searchStore';


export interface SearchFiltersProps {
  selection: (selection: Competence | null) => void;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export function SearchFilters( {selection} : SearchFiltersProps ): React.JSX.Element {
  
  // Suggestions for the search input field
  const [suggestions, setSuggestions] = React.useState<Competence[]>([]);
  // Keep the selected competence in the store
  const { competence, setCompetence } = useSearchStore();
  const [showAlert, setShowAlert] = React.useState<boolean>(false);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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

  //Advanced Search Area

  const [language, setLanguage] = React.useState([]);
  const [area, setArea] = React.useState([]);
  const [seniority, setSeniority] = React.useState([]);

  return (
    <Stack spacing={2}>
      {/* Input search */}
      <Card sx={{ p: 2 }}>
        <CardMedia
          sx={{ height: 150 , margin: 'auto', borderRadius: '15px'}}
          component="img"
          src='/logo.jpg'
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
        <CardActions sx={{justifyContent:'flex-end'}}>
          <Typography variant='h6'>Busca Avançada</Typography>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" >
          <CardContent>
            <Divider style={{marginBottom: '15px'}} />    
            <Stack spacing={3}>
              <Typography variant='h5'>Filtros da Busca</Typography>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="advanced-select-label-language">Linguagem</InputLabel>
                    <Select
                      labelId="advanced-select-label-language"
                      id="select-label-language"
                      value={language}
                      label="Language"
                      onChange={(event) => setLanguage([])}
                    >
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="advanced-select-label-area">Área</InputLabel>
                    <Select
                      labelId="advanced-select-label-area"
                      id="select-label-area"
                      value={area}
                      label="Area"
                      onChange={(event) => setArea([])}
                    >
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="advanced-select-label-seniority">Senioridade</InputLabel>
                    <Select
                      labelId="advanced-select-label-seniority"
                      id="select-label-seniority"
                      value={seniority}
                      label="Seniority"
                      onChange={(event) => setSeniority([])}
                    >
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Stack>
          </CardContent>
          <CardActions sx={{justifyContent:'flex-end'}}>
            <Button variant='contained' color='primary'>Aplicar Filtros</Button>
          </CardActions>
        </Collapse>
      </Card>
      {/* Alert */}
      {showAlert && <Alert severity="error">Erro ao carregar as sugestões de busca</Alert>}
    </Stack>
  );
}
