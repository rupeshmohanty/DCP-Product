import axios from "axios";
import { useState } from "react";

const ProductForm = (props) => {
    const [data, setData] = useState({
        "productCode": "",
        "productDescription": "",
        "price": ""
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(data);
    }

    const addProduct = (data) => {
        axios.post('http://18.132.190.180:8081/products/create', data, { mode: 'cors' })
        .then((res) => console.log(res))
    }

    if (props.operationType === "Add") {
        return(
            <div className="card" style={{ marginTop: '40px' }}>
                <div className="card-body">
                    <h4>Add Product</h4><br/>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Product Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" name = "productCode" value = {data.productCode} onChange={handleChange} aria-describedby="emailHelp"/>
                        </div>
                        {/* <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Product image url</label>
                            <input type="text" className="form-control" id="exampleInputPassword1"/>
                        </div> */}
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Product Description</label>
                            <textarea class="form-control" name = "productDescription" value = {data.productDescription} onChange={handleChange} id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Price</label>
                            <input type="number" className="form-control" id="exampleInputPassword1" name = "price" value = {data.price} onChange={handleChange}/>
                        </div>
                        {/* <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Quantity</label>
                            <input type="number" className="form-control" id="exampleInputPassword1"/>
                        </div> */}
                        <button type="submit" className="btn btn-primary">Add Product</button>
                    </form>  
                </div>
            </div>
        )
    } else {
        return(
            <div className="card" style={{ marginTop: '40px' }}>
                <div className="card-body">
                    <h4>Edit Product</h4><br/>
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Product Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Product image url</label>
                            <input type="text" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Product Description</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Price</label>
                            <input type="number" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Quantity</label>
                            <input type="number" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Edit Product</button>
                    </form>  
                </div>
            </div>
        )
    }
}

export default ProductForm;