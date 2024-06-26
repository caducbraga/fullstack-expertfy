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
  const { count,  page, rowsPerPage, paginatedExperts, setCount, setPage, setRowsPerPage, setPaginatedExperts } = useTableStore();

  const [showAlertWarningEmptyExperts, setShowAlertWarningEmptyExperts] = React.useState<boolean>(false);

  // Get the selected Competence and apply the filter
  const handleFilterSelect = (selection: Competence | null) => {
    if (selection !== null) {
      const expert_list_pr = searchExpert.getExpertList(selection);
      expert_list_pr.then((data) => {
        //initial experts list
        setExperts(data);
        setFilteredExperts(data);
        setCount(data.length);
        setPaginatedExperts(applyPagination(data, page, rowsPerPage));
        setShowAlertWarningEmptyExperts(false);
      });

    }
  }

  // Get the filters values for the advanced search and apply the filter
  const handleAdvancedFilters = (filters: AdvancedFilters) => {
    // Check if the expert list is empty
    console.log(filters)
    if(experts.length === 0) {
      setShowAlertWarningEmptyExperts(true);
      return;
    }
    let filteredExpertsLocal: Expert[] = [];
    if (filteredExperts.length !== 0) {
      filteredExpertsLocal = filteredExperts;
    }
    else {
      filteredExpertsLocal = experts;
    }
    
    // Default: none filter
    if (!filters.useArea && !filters.useLanguage && !filters.useSeniority) {
      setPaginatedExperts(applyPagination(experts, page, rowsPerPage));
      setFilteredExperts(experts);
      setCount(experts.length);
    
    }
    // Some filter was selected
    else {
      if(filters.useLanguage) {
        filteredExpertsLocal = filteredExpertsLocal.filter((e) => e.language === filters.perLanguage);
      }
      if(filters.useArea) {
        filteredExpertsLocal = filteredExpertsLocal.filter((e) => e.area === filters.perArea);
      }
      if(filters.useSeniority) {
        filteredExpertsLocal = filteredExpertsLocal.filter((e) => e.seniority === filters.perSeniority);
      }
      // Update the filtered experts list
      setPaginatedExperts(applyPagination(filteredExpertsLocal, page, rowsPerPage));
      setFilteredExperts(filteredExpertsLocal);
      setCount(filteredExpertsLocal.length);
    }
     // Reset the page to 0 when the filters are applied
    setPage(0);
  }

  // Pagination control
  React.useEffect(() => {
    
    setPaginatedExperts(applyPagination(filteredExperts, page, rowsPerPage));
    
    
  }, [page, rowsPerPage]);


  return (
    <Stack spacing={3}>
      <SearchFilters selection={handleFilterSelect} filter={handleAdvancedFilters} />
      {showAlertWarningEmptyExperts && <Alert severity="warning">Busque por uma competência antes de utilizar os filtros avançados</Alert>}
      {experts.length > 0 && (
        <SearchTable
          count={count}
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
