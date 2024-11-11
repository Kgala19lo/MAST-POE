import React from 'react';

type MenuItem = {
  id: number;
  name: string;
  description: string;
  course: string;
  price: number;
};

type Props = {
  menuItems: MenuItem[];
};

const HomeScreen: React.FC<Props> = ({ menuItems }) => {
  const calculateAveragePrice = (course: string): number => {
    const items = menuItems.filter(item => item.course === course);
    if (items.length === 0) return 0;

    let total = 0;
    for (const item of items) {
      total += item.price;
    }
    return total / items.length;
  };

  return (
    <div>
      <h2>Menu Overview</h2>
      <p>Average Price of Starters: ${calculateAveragePrice('starter').toFixed(2)}</p>
      <p>Average Price of Mains: ${calculateAveragePrice('main').toFixed(2)}</p>
      <p>Average Price of Desserts: ${calculateAveragePrice('dessert').toFixed(2)}</p>
    </div>
  );
};

export default HomeScreen;
