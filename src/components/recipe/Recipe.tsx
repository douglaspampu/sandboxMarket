import { Recipe } from "../../types/Recipe"

interface IMyProps {
    recipe: Recipe,
}

export const RecipeComponent:React.FC<IMyProps> = (prop : IMyProps) => {
    return <div className="product">
        <h3>{prop.recipe.name}</h3>
        <p>{prop.recipe.description}</p>
        <img height="200px" width="200px" src={prop.recipe.image_url} />
        <div>
            <h4>Ingredients</h4>
            {prop.recipe.ingredients.map((i)=><li>{i}</li>)}
        </div>
    </div>
}