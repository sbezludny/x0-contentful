import React from 'react';

const Categories = ({categories}) => {  
  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map(category => (
          <li key={category.sys.id}>{category.fields.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;