'use client';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';



interface ManifestTableProps {

  rows?: any[];

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
              <TableCell>Competência</TableCell>
              <TableCell>Manifestação da Competência</TableCell>
              <TableCell>Data de Ocorrência</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {

              return (
                <TableRow hover key={row.id} >
                  <TableCell>{row.competence}</TableCell>
                  <TableCell>{row.manifestCompetence}</TableCell>
                  <TableCell>{row.timestamp}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>

      
    </Card>
  );
}
