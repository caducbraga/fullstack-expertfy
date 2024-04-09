import { create } from 'zustand';
import { Expert } from '@/components/search/search-table';
import { Competence } from '@/lib/search/search';


interface SearchState {
  page: number;
  rowsPerPage: number;
  paginatedExperts: Expert[];
  experts: Expert[];
  competence: Competence | null;
  setPage: (page: number) => void;
  setRowsPerPage: (rowsPerPage: number) => void;
  setPaginatedExperts: (Experts: Expert[]) => void;
  setExperts: (experts: Expert[]) => void;
  setCompetence: (competence: Competence | null) => void;
}

const useSearchStore = create<SearchState>((set) => ({
  page: 0,
  rowsPerPage: 5,
  paginatedExperts: [],
  experts: [],
  competence: null,
  setPage: (page) => set({ page }),
  setRowsPerPage: (rowsPerPage) => set({ rowsPerPage }),
  setPaginatedExperts: (paginatedExperts) => set({ paginatedExperts }),
  setExperts: (experts) => set({ experts }),
  setCompetence: (competence) => set({ competence }),

}));

export default useSearchStore;
