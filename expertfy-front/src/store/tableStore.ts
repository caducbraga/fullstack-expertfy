import {create} from 'zustand';
import type { Expert } from '@/components/search/search-table';

interface TableState {
  count: number;
  page: number;
  rowsPerPage: number;
  paginatedExperts: Expert[];

  setCount: (count: number) => void;
  setPage: (page: number) => void;
  setRowsPerPage: (rowsPerPage: number) => void;
  setPaginatedExperts: (paginatedExperts: Expert[]) => void;
}

const useTableStore = create<TableState>((set) => ({
  count: 0,
  page: 0,
  rowsPerPage: 5,
  paginatedExperts: [],

  setCount: (count) => set({ count }),
  setPage: (page) => set({ page }),
  setRowsPerPage: (rowsPerPage) => set({ rowsPerPage }),
  setPaginatedExperts: (paginatedExperts) => set({ paginatedExperts }),
}));

export default useTableStore;