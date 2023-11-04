import React from 'react';
import { BurgerContentProps } from '../types';

const BurgerContent: React.FC<BurgerContentProps> = ({name, count}) => {
  const ingredientDivs = [];
  for (let i = 0; i < count; i++) {
    ingredientDivs.push(<div key={`${name}-${i}`} className={name}></div>);
  }
  return ingredientDivs;
};

export default BurgerContent;
