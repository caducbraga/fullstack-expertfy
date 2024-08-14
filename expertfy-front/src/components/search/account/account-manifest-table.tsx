'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { format } from 'date-fns';


interface ManifestTableProps {

  rows?: ManifestTableContent[];

}

export interface ManifestTableContent{
  artefact: string;
  date: Date;
  description: string;
  id: string;
  skillId: string;
  skillname: string;
  skilltype: string;
  taskname: string;
}

export function ManifestTable({
  rows = [],
}: ManifestTableProps): React.JSX.Element {

  const rowIds = React.useMemo(() => {
    return rows.map((customer) => customer.id);
  }, [rows]);

  return (
    <Card>
      <Box sx={{ overflowX: 'auto' }}>
        <Table sx={{ minWidth: '800px' }}>
          <TableHead>
            <TableRow>
              <TableCell>Habilidade</TableCell>
              <TableCell>Nome da Tarefa</TableCell>
              <TableCell>Artefato</TableCell>
              <TableCell>Data de Ocorrência</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {

              return (
                <TableRow hover key={row.id} >
                  <TableCell>{row.skillname}</TableCell>
                  <TableCell>{row.taskname}</TableCell>
                  <TableCell><a href={row.artefact}>{row.artefact}</a></TableCell>
                  <TableCell>{format(new Date(row.date), 'dd/MM/yyyy')}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>


    </Card>
  );
}
