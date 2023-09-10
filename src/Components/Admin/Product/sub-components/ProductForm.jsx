const ProductForm = (props) => {
    if (props.operationType === "Add") {
        return(
            <div className="card" style={{ marginTop: '40px' }}>
                <div className="card-body">
                    <h4>Add Product</h4><br/>
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