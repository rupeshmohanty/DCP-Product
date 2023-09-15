import axios from "axios";
import { useEffect, useState } from "react";

const ProductViewComponent = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://18.132.190.180:8081/products')
        .then((res) => {
            setProducts(res.data)
        })
    }, [])

    console.log(products);

    return(
        <>
            <div className="row">
                { products.map((product) => {
                    return(
                        <div className="col-md-4" id = { product.id } style={{ marginTop: '10px' }}>
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="https://thumbs.dreamstime.com/b/loading-products-line-icon-vector-illustration-loading-products-linear-concept-sign-loading-products-linear-icon-concept-117095027.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{ product.productCode }</h5>
                                    <p className="card-text">{ product.productDescription }</p>
                                </div>
                            </div>
                        </div>
                    )
                }) }
            </div>
        </>
    )
}

export default ProductViewComponent;