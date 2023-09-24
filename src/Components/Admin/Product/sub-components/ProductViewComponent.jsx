import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductViewComponent = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://18.132.190.180:8081/products')
        .then((res) => {
            setProducts(res.data)
        })
    }, [])

    console.log(products);

    const deleteProduct = (prodId) => {
        axios.get('http://18.132.190.180:8081/products/delete/' + prodId)
        .then(() => {
            console.log("Product deleted, please refresh page!");
        })
    }

    return(
        <>
            <div className="row">
                { products.map((product) => {
                    const id = product.id;
                    var editLink = '/edit/' + id;
                    return(
                        <div className="col-md-4" id = { product.id } style={{ marginTop: '10px' }}>
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="https://thumbs.dreamstime.com/b/loading-products-line-icon-vector-illustration-loading-products-linear-concept-sign-loading-products-linear-icon-concept-117095027.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{ product.productCode }</h5>
                                    <p className="card-text">{ product.productDescription }</p>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <Link class="btn btn-primary"><i class="fa-solid fa-eye"></i></Link>
                                        </div>
                                        <div className="col-md-3">
                                            <Link to = { editLink } class="btn btn-primary"><i class="fa-solid fa-pencil"></i></Link>
                                        </div>
                                        <div className="col-md-3">
                                            <Link onClick={deleteProduct(id)} class="btn btn-primary"><i class="fa-solid fa-trash"></i></Link>
                                        </div>
                                    </div>
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