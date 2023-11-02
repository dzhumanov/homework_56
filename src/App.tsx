import {useState} from 'react'

import IngredientComponent from './Components/Ingredients';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [ingredients, setIngredients] = useState([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
    {name: 'Bacon', count: 0},
  ]);

  return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h2>Ingredients</h2>
            <IngredientComponent></IngredientComponent>
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
};

export default App
