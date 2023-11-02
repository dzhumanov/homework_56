import INGREDIENTS from "../Constants/Constants";
import { Ingredients } from "../types";
import CreateIngredient from "./CreateIngredient";

const IngredientComponent: React.FC = () => {
  const allIngredients = INGREDIENTS.map((item: Ingredients) => {
    return <CreateIngredient key={item.id} name={item.name} img={item.img} />;
  });

  return <div className="ingredients-wrapper d-flex flex-column">{allIngredients}</div>;
}

export default IngredientComponent;