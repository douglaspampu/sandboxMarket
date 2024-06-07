import CatalogComponent from "../catalog/Catalog"
import { RecipeListComponent } from "../recipeList/RecipeList"

export const HomeComponent = () =>{
    return <div style={{margin:'2em'}}>
        <h1>Sandbox Market</h1>
        <div style={{margin:'1em'}}>
            <h2>Our Catalog</h2>
            <CatalogComponent />
        </div>
        <div style={{margin:'1em'}}>
            <h2>Today's Recipes</h2>
            <RecipeListComponent />
        </div>
    </div>
}