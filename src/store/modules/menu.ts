import { defineStore } from 'pinia';
import menuRoutes from '@/router/modules/menuRoutes';

interface Menu {
  path: string;
  title: string;
  // icon?: string;
  children?: Menu[];
}

const generateAbsolutePath = (path: string, parentPath: string): string => {
  if (path.startsWith('/')) {
    return path;
  } else if (path) {
    return `${parentPath}/${path}`;
  } else if (parentPath) {
    return parentPath;
  } else {
    return '/';
  }
};

const generateMenus = (menuR: typeof menuRoutes, parentPath = ''): Menu[] => {
  const menus: Menu[] = [];

  menuR.forEach((each) => {
    const menu: Menu = {
      path: generateAbsolutePath(each.path, parentPath),
      title: each.meta.title,
    };
    if (each.children) {
      menu.children = generateMenus(each.children, menu.path);
    }
    menus.push(menu);
  });

  return menus;
};

export const useMenuStore = defineStore({
  id: 'menu',
  state: () => ({
    menus: [] as Menu[],
  }),
  actions: {
    generateMenus() {
      this.menus = generateMenus(menuRoutes, '');
    },
  },
});
