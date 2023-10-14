import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditProductForm = () => {
    const [data, setData] = useState({
        "productCode": "",
        "productDescription": "",
        "price": ""
    })

    const productId = useParams();
    const link = 'http://18.132.190.180:8081/products/' + productId.id;

    useEffect(() => {
        axios.get(link)
        .then((res) => {
            setData(res.data)
        })
    });

    console.log(data);

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const editProduct = (e) => {
        e.preventDefault();
        axios.post('http://18.132.190.180:8081/products/update/' + productId, data, { headers: { 'Content-Type': 'application/json'} })
        .then((res) => {
            console.log(res.data);
        })
    }
    return(
        <div className="card" style={{ marginTop: '40px' }}>
            <div className="card-body">
                <h4>Edit Product</h4><br/>
                <form onSubmit={ editProduct }>
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
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name = "productDescription" value = {data.productDescription} onChange={handleChange}></textarea>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Price</label>
                        <input type="number" className="form-control" id="exampleInputPassword1" name = "price" value = {data.price} onChange={handleChange}/>
                    </div>
                    {/* <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Quantity</label>
                        <input type="number" className="form-control" id="exampleInputPassword1"/>
                    </div> */}
                    <button type="submit" className="btn btn-primary">Edit Product</button>
                </form>  
            </div>
        </div>
    )
}

export default EditProductForm;