"use client"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


import { SearchFilters } from '@/components/search/search-filters';
import { Expert, SearchTable } from '@/components/search/search-table';
import type { Competence } from '@/lib/search/search';
import { searchExpert } from '@/lib/search/search';
import useSearchStore from '@/store/searchStore';


export default function Page(): React.JSX.Element {
  
  const { page, setPage, rowsPerPage, setRowsPerPage, experts, setExperts, paginatedExperts, setPaginatedExperts } = useSearchStore();

  const handleFilterSelect = (selection: Competence | null) => {
    if (selection !== null) {
      const expert_list_pr = searchExpert.getExpertList(selection);
      expert_list_pr.then((data) => {
        console.log(data);
        setExperts(data);
        setPaginatedExperts(applyPagination(data, page, rowsPerPage));
      });
    }
  }

  React.useEffect(() => {
    setPaginatedExperts(applyPagination(experts, page, rowsPerPage));
  }, [page, rowsPerPage]);

  return (
    <Stack spacing={3}>
      <SearchFilters selection={handleFilterSelect} />
      {experts.length > 0 && (
        <SearchTable
          count={experts.length}
          page={page}
          rows={paginatedExperts}
          rowsPerPage={rowsPerPage}
          setPage={setPage}
          setRowsPerPage={setRowsPerPage}
        />
      )}
    </Stack>
  );
}

function applyPagination(rows: Expert[], page: number, rowsPerPage: number): Expert[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
