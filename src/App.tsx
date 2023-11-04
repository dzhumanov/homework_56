import {useState} from 'react'

import INGREDIENTS from "./Constants/Constants";
import Ingredient from './Components/Ingredient';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [ingredients, setIngredients] = useState<{name: string; count: number}[]>([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
    {name: 'Bacon', count: 0},
  ]);

  const addIngredient = (name: string) => {
    setIngredients((prevState) => {
      return prevState.map((ingredient) => {
        if (ingredient.name === name) {
          return { ...ingredient, count: ingredient.count + 1 };
        }
        return ingredient;
      });
    });
  };

  const deleteIngredient = (name: string) => {
    setIngredients((prevState) => {
      return prevState.map((ingredient) => {
        if (ingredient.name === name) {
          if (ingredient.count > 0) {
            return { ...ingredient, count: ingredient.count - 1 };
          }
        }
        return ingredient;
      });
    });
  };


  return(
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h2>Ingredients</h2>
            {INGREDIENTS.map((ingredient) => (
              <Ingredient 
                key={ingredient.name} 
                name={ingredient.name} 
                cost={ingredient.cost} 
                img={ingredient.img}
                onAdd={() => addIngredient(ingredient.name)}
                onDelete={() => deleteIngredient(ingredient.name)}
              />
            ))}
        </div>
        <div className='col'>
          <h2>Burger</h2>
          <div className="Burger">
            <div className="BreadTop">
              <div className="Seeds1"></div>
              <div className="Seeds2"></div>
            </div>
            <div className="BreadBottom"></div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default App;