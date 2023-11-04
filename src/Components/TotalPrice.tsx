import { BurgerContentProps } from "../types";

const TotalPrice = (ingredient:string, array: BurgerContentProps[]) => {
    const amount = array.find(item => item.name === ingredient);
    if (amount) {
      return amount.count;
    } else {
      throw new Error ('Count not found!');
    }
}

export default TotalPrice;