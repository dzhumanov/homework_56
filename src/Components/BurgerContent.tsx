import React from 'react';
import { BurgerContentProps } from '../types';

const BurgerContent: React.FC<BurgerContentProps> = ({name, count}) => {
  const ingredientDivs = [];
  for (let i = 0; i < count; i++) {
    if (name === 'Cheese') {
        const meltingCheeseDiv = (
            <div key={`${name}-melting${i}`} className='melting-cheese'></div>
        );

        const cheeseDiv = (
            <div key={`${name}-${i}`} className={name}>
                {meltingCheeseDiv}
            </div>
        );

        ingredientDivs.push(cheeseDiv);
    } else {
        ingredientDivs.push(<div key={`${name}-${i}`} className={name}></div>);
    }
  }
  return ingredientDivs;
};

export default BurgerContent;
