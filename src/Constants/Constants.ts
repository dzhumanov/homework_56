import meatImage from '../assets/meat.png';
import cheeseImage from '../assets/cheese.png';
import saladImage from '../assets/salad.png';
import baconImage from '../assets/bacon.png';
import { ConstantProps } from '../types';

const INGREDIENTS: ConstantProps[] = [
    {name: 'Meat', cost: 80, img: meatImage},
    {name: 'Cheese', cost: 50, img: cheeseImage},
    {name: 'Salad', cost: 10, img: saladImage},
    {name: 'Bacon', cost: 60, img: baconImage},
];

export default INGREDIENTS;
