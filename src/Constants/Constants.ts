import meatImage from '../assets/meat.png';
import cheeseImage from '../assets/cheese.png';
import saladImage from '../assets/salad.png';
import baconImage from '../assets/bacon.png';
import { Ingredients } from '../types';

const INGREDIENTS: Ingredients[] = [
    {name: 'Meat', cost: 80, img: meatImage, id: 1},
    {name: 'Cheese', cost: 50, img: cheeseImage, id: 2},
    {name: 'Salad', cost: 10, img: saladImage, id: 3},
    {name: 'Bacon', cost: 60, img: baconImage, id: 4},
];

export default INGREDIENTS;
