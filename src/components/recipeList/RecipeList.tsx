import { useEffect, useState } from "react"
import { Recipe } from "../../types/Recipe"
import axios from "axios"
import { RecipeComponent } from "../recipe/Recipe"


export const RecipeListComponent = () => {
    const [recipes, setRecipes] = useState<Recipe[]>()
    const url = 'https://d9aemxxda5.execute-api.eu-central-1.amazonaws.com/'

    useEffect(()=>{
        fetchData()
    },[])
    
    const fetchData = async () => {
        try {
            const response = await axios.get(`${url}/sandbox/getrecipes`)
            setRecipes(response.data.recipes);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return <div className="page_content catalog wrap">
        {recipes?.map((recipe)=>{
            return <RecipeComponent recipe={recipe} />
        })}
    </div>
}