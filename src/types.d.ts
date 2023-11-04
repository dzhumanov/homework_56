export interface IngredientProps {
    name: string;
    cost: number;
    img: string;
    onAdd: () => void;
    onDelete: () => void;
};

export interface ConstantProps {
    name: string;
    cost: number;
    img: string;
}
