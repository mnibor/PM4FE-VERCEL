export const categoriesMap: { [key: number]: string } = {
  1: 'Smartphones',
  2: 'Laptops',
  3: 'Tablets',
  4: 'Headphones',
  5: 'Cameras',
  6: 'Printers',
  7: 'Monitors',
  8: 'Storage',
  9: 'Accessories',
  10: 'Smart Watches',
  11: 'Speakers',
};

export const getCategoryName = (categoryId: number): string => {
  return categoriesMap[categoryId] || 'Unknown Category';
};
