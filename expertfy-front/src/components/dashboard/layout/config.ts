import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'search', title: 'Busca de Especialistas', href: paths.search.search, icon: 'users' },
  { key: 'account', title: 'Conta', href: paths.search.account, icon: 'user' },
  { key: 'error', title: 'Erro', href: paths.errors.notFound, icon: 'x-square' },
] satisfies NavItemConfig[];
