import { useEffect, useState } from "react"
import { Product } from "../../types/Product";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductComponent from "../product/Product";
import { Catalog } from "../../types/Catalog";

function CatalogComponent() {
    const [catalog, setProductsList] = useState<Catalog>()
    const url = 'https://d9aemxxda5.execute-api.eu-central-1.amazonaws.com/'

    useEffect(()=>{
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get(`${url}/sandbox/getproducts`)
            setProductsList(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    return <div>
        <div className="catalog wrap page_content">{catalog?.ingredients.map((element)=>{
            return <div className="product">
                <ProductComponent product={element}></ProductComponent>
            </div>
        })}</div>
    </div>
}

export default CatalogComponent