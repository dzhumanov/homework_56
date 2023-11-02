import { ShortIngredients } from "../types";
import React from "react";

const CreateIngredient: React.FC<ShortIngredients> = ({ name, img }) => {
    return(
        <div className="col d-flex align-items-center gap-4">
            <div className="img">
                <img src = {img} alt="" className="ingredient-img"/>
            </div>
            <h3>{name}</h3>
        </div>
    )
};

export default CreateIngredient;