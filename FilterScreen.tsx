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
  filterByCourse: (course: string) => void;
  selectedCourse: string | null;
};

const FilterScreen: React.FC<Props> = ({ menuItems, filterByCourse, selectedCourse }) => {
  const filteredItems = selectedCourse ? menuItems.filter(item => item.course === selectedCourse) : menuItems;

  return (
    <div>
      <h2>Filter Menu by Course</h2>
      <button onClick={() => filterByCourse('starter')}>Starters</button>
      <button onClick={() => filterByCourse('main')}>Mains</button>
      <button onClick={() => filterByCourse('dessert')}>Desserts</button>
      <button onClick={() => filterByCourse('')}>Clear Filter</button>

      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>
            {item.name} - {item.course} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterScreen;
