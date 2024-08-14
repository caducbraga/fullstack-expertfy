import * as React from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export interface PanelTableScoreProps {
  id: string;
  actual_value: number;
  total_value: number;
  name: string;


}

interface PanelTableProps {
  score: PanelTableScoreProps[];
  createSE?: (skilltypeId: string) => void;
}

const MIN_SCORE = 0;
//normaliza entre 0 e 100
const normalise = (value: number, max_value: number) => ((value - MIN_SCORE)*100) / (max_value - MIN_SCORE);

function LinearProgressWithLabel(props: LinearProgressProps & {id: string, value: number, name: string, max_value: number,
  createSE?: (skilltypeId: string) => void,
  color?: string }) {
  return (
    <Box sx={{ display: 'flex',  width: '100%', mr: 1 , flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {/* Nome da habilidade */}
        <Box sx={{ width: '10%', mr: 1 , alignSelf: 'start'}}>
          <Typography variant="h6" color="text.secondary">{props.name}</Typography>
        </Box>

        <Box sx={{ width: '90%', mr: 1 }}>
          {/* Barra de progresso da habilidade */}
          <Box sx={{ width: '100%', mr: 1 , display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Box sx={{ width: '100%', mr: 1 }}>
              <LinearProgress variant="determinate" value={normalise(props.value, props.max_value)} color={props.color} />
            </Box>
            <Box sx={{  minWidth: 35, ml: 1}}>
              <Typography variant="bold" color="black" size="md">{props.value}</Typography>
            </Box>
            <Box sx={{  minWidth: 35}}>
              <Typography variant="body2" color="text.secondary" onClick={() => {props.createSE && props.createSE(props.id)}}>{"Joinha"}</Typography>
            </Box>
          </Box>

          {/* Legenda numérica da habilidade */}
          <Box sx={{ width: '100%', mr: 1 , display: 'flex', justifyContent: 'space-between', marginBottom: 1, paddingRight: 8}}>
            <Box sx={{ minWidth: 35 }}>
              <Typography variant="body2" color="text.secondary">{MIN_SCORE}</Typography>
            </Box>
            <Box sx={{  minWidth: 35 }}>
              <Typography variant="body2" color="text.secondary">{props.max_value}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function AccountScorePanel({score = [], createSE}: PanelTableProps) {

  return (
    <Card >
      <CardContent>
        {/* map de todas as habilidades */}

        {score.map((item) => (
          console.log(item),

          <LinearProgressWithLabel
          key={item.id}
          id = {item.id}
          value={item.actual_value}
          max_value={item.total_value}
          name={item.name}
          createSE={createSE}  />
        ))}
      </CardContent>
    </Card>
  );
}
