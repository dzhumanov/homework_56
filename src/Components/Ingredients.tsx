import INGREDIENTS from "../Constants/Constants";
import { Ingredients } from "../types";
import CreateIngredient from "./CreateIngredient";

const IngredientComponent: React.FC = () => {
  const allIngredients = INGREDIENTS.map((item: Ingredients) => {
    return <CreateIngredient name={item.name} img={item.img} />;
  });

  return <div>{allIngredients}</div>;
}

export default IngredientComponent;