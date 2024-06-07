import { Product } from "../../types/Product"
import { Recipe } from "../../types/Recipe"
import ProductComponent from "../product/Product"
import { RecipeComponent } from "../recipe/Recipe"
import { RecipeListComponent } from "../recipeList/RecipeList"
import { MyMessageComponent } from "./MyMessage"

export type ComponentData = {
    recipeList?:Recipe[],
    productList?:Product[],
    message?:string
}

export class ComponentFactory {
    componentData:ComponentData
    componentType:string

    constructor(componentType:string, componentData:ComponentData){
        this.componentData = componentData
        this.componentType = componentType
    }

    getComponent(){
        switch (this.componentType){
            case 'filterRecipe':
                return <>
                    {this.componentData.recipeList?.map((recipe)=>{
                        return <RecipeComponent recipe={recipe} />
                    })}
                </>
            case 'filterProducts':
                return <>
                    {this.componentData.productList?.map((product)=>{
                        return <ProductComponent product={product}/>
                    })}
                </>
            case 'message':
                return <MyMessageComponent message={this.componentData.message?this.componentData.message:''} />
        }
    }

}