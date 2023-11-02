import Burger from './Components/Burger';
import IngredientComponent from './Components/Ingredients';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h2>Ingredients</h2>
            <IngredientComponent></IngredientComponent>
          </div>
          <div className='col'>
            <h2>Burger</h2>
            <Burger></Burger>
          </div>
        </div>
      </div>
    )
};

export default App
