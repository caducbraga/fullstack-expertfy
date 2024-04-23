"use client"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import { SearchFilters } from '@/components/search/search-filters';
import { Expert, SearchTable } from '@/components/search/search-table';
import type { Competence } from '@/lib/search/search';
import { searchExpert } from '@/lib/search/search';
import useSearchStore from '@/store/searchStore';
import useTableStore from '@/store/tableStore';
import type { AdvancedFilters } from '@/components/search/advanced-search';
import { Alert } from '@mui/material';



export default function Page(): React.JSX.Element {
  
  const { experts, filteredExperts, setExperts, setFilteredExperts } = useSearchStore();
  const { page, rowsPerPage, paginatedExperts, setPage, setRowsPerPage, setPaginatedExperts } = useTableStore();

  const [showAlertWarningEmptyExperts, setShowAlertWarningEmptyExperts] = React.useState<boolean>(false);

  // Get the selected Competence and apply the filter
  const handleFilterSelect = (selection: Competence | null) => {
    if (selection !== null) {
      const expert_list_pr = searchExpert.getExpertList(selection);
      expert_list_pr.then((data) => {
        setExperts(data);
        setPaginatedExperts(applyPagination(data, page, rowsPerPage));
        setShowAlertWarningEmptyExperts(false);
      });
    }
  }

  // Get the filters values for the advanced search and apply the filter
  const handleAdvancedFilters = (filters: AdvancedFilters) => {
    // Check if the expert list is empty
    if(experts.length === 0) {
      setShowAlertWarningEmptyExperts(true);
      return;
    }
    var filteredExperts = experts;
    // Default: none filter
    if (filters.useArea && filters.useLanguage && filters.useSeniority) {
      setPaginatedExperts(applyPagination(experts, page, rowsPerPage));
    }
    // Some filter was selected
    else {
      if(filters.useLanguage) {
        filteredExperts = experts.filter((e) => e.language === filters.perLanguage);
      }
      if(filters.useArea) {
        filteredExperts = experts.filter((e) => e.area === filters.perArea);
      }
      if(filters.useSeniority) {
        filteredExperts = experts.filter((e) => e.seniority === filters.perSeniority);
      }
      setPaginatedExperts(applyPagination(filteredExperts, page, rowsPerPage));
      setFilteredExperts(filteredExperts);
    }
  }



  // Pagination control
  React.useEffect(() => {
    if (filteredExperts.length > 0) {
      setPaginatedExperts(applyPagination(filteredExperts, page, rowsPerPage));
    }
    else {
      setPaginatedExperts(applyPagination(experts, page, rowsPerPage));
    }
  }, [page, rowsPerPage]);

  return (
    <Stack spacing={3}>
      <SearchFilters selection={handleFilterSelect} filter={handleAdvancedFilters} />
      {showAlertWarningEmptyExperts && <Alert severity="warning">Busque por uma competência antes de utilizar os filtros avançados</Alert>}
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
