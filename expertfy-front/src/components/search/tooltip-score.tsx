import * as React from 'react';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import Tooltip from '@mui/material/Tooltip';

export default function ScoreTooltip() {
  return (
    <Tooltip sx={{fontSize: "1rem"}} title="Em verde são os 10% mais bem avaliados, em amarelo são os 40% mais bem avaliados e em vermelho o restante."> 
      <HelpRoundedIcon/>
    </Tooltip>
  );
}