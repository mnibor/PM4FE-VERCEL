import { ICategory } from '@/interfaces/category.interface'

export const categoriesToPreLoad = {
  all: (): ICategory[] => {
    return [
      {
        id: 0,
        name: 'Smartphones',
      },
      {
        id: 1,
        name: 'Laptops',
      },
      {
        id: 2,
        name: 'Tablets',
      },
      {
        id: 3,
        name: 'Headphones',
      },
      {
        id: 4,
        name: 'Cameras',
      },
      {
        id: 5,
        name: 'Printers',
      },
      {
        id: 6,
        name: 'Monitors',
      },
      {
        id: 7,
        name: 'Storage',
      },
      {
        id: 8,
        name: 'Accessories',
      },
      {
        id: 9,
        name: 'Smart Watches'
      },
      {
        id: 10,
        name: 'Speakers'
      },
    ];
  },
};
