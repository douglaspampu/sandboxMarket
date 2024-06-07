import { Product } from "../../types/Product";

interface IMyProps {
    product: Product,
}

const ProductComponent:React.FC<IMyProps> = (prop : IMyProps) => {

    return (<div>
        <h3 style={{display:"flex", justifyContent:"center"}}>{prop.product.name}</h3>
        <img style={{marginLeft:"auto",marginRight:"auto", display:"block"}} height="200px" width="200px" src={prop.product.image_url} />
        <p>{prop.product.price}</p>
    </div>)
}

export default ProductComponent