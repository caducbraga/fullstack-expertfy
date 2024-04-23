import {create} from 'zustand';
import type { Expert } from '@/components/search/search-table';

interface TableState {
  page: number;
  rowsPerPage: number;
  paginatedExperts: Expert[];

  setPage: (page: number) => void;
  setRowsPerPage: (rowsPerPage: number) => void;
  setPaginatedExperts: (paginatedExperts: Expert[]) => void;
}

const useTableStore = create<TableState>((set) => ({
  page: 0,
  rowsPerPage: 5,
  paginatedExperts: [],

  setPage: (page) => set({ page }),
  setRowsPerPage: (rowsPerPage) => set({ rowsPerPage }),
  setPaginatedExperts: (paginatedExperts) => set({ paginatedExperts }),
}));

export default useTableStore;