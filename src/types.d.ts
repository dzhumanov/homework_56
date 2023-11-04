export interface IngredientProps {
    name: string;
    cost: number;
    img: string;
    total: number;
    onAdd: () => void;
    onDelete: () => void;
};

export interface ConstantProps {
    name: string;
    cost: number;
    img: string;
}

export interface BurgerContentProps{
    name: string;
    count: number;
}