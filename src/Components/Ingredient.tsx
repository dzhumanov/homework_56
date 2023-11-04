import React from 'react';

import { IngredientProps } from '../types';

const Ingredient: React.FC<IngredientProps> = ({
  name,
  cost,
  img,
  total,
  onAdd,
  onDelete,
}) => {
  return (
    <div className="ingredient col d-flex align-items-center gap-4">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{cost} сом</p>
      <p>x {total}</p>
      <button onClick={onAdd}>Добавить</button>
      <button onClick={onDelete}>Удалить</button>
    </div>
  );
};

export default Ingredient;