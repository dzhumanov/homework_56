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
      <h4>{name}</h4>
      <p className='mb-0'>{cost} KGS</p>
      <p className='mb-0'>x {total}</p>
      <button onClick={onAdd} className='btn btn-primary'>Добавить</button>
      <button onClick={onDelete} className='btn btn-danger'>Удалить</button>
    </div>
  );
};

export default Ingredient;