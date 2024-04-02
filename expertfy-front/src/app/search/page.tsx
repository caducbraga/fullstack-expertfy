"use client"
import * as React from 'react';
import type { Metadata } from 'next';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


import { config } from '@/config';
import { SearchFilters } from '@/components/search/search-filters';
import { Expert, SearchTable } from '@/components/search/search-table';
import type { Competence } from '@/lib/search/search';
import { searchExpert } from '@/lib/search/search';


export default function Page(): React.JSX.Element {
  const [page, setPage] = React.useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(5);

  const [paginatedCustomers, setPaginatedCustomers] = React.useState<Expert[]>([]);
  const [experts, setExperts] = React.useState<Expert[]>([]);

  const handleFilterSelect = (selection: Competence) => {
    console.log('Selected:', selection);
    const expert_list_pr = searchExpert.getExpertList(selection);
    expert_list_pr.then((data) => {
      console.log(data);
      setExperts(data);
      setPaginatedCustomers(applyPagination(data, page, rowsPerPage));
    });
  }

  React.useEffect(() => {
    setPaginatedCustomers(applyPagination(experts, page, rowsPerPage));
  }, [page, rowsPerPage]);

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Busca de Especialistas</Typography>
        </Stack>
      
      </Stack>
      <SearchFilters selection={handleFilterSelect} />
      <SearchTable
        count={experts.length}
        page={page}
        rows={paginatedCustomers}
        rowsPerPage={rowsPerPage}
        setPage={setPage}
        setRowsPerPage={setRowsPerPage}
      />
    </Stack>
  );
}

function applyPagination(rows: Expert[], page: number, rowsPerPage: number): Expert[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
