import Navbar from "./sub-components/Navbar";
import ProductForm from "./sub-components/ProductForm";

const EditProduct = () => {
    return(
        <>
            <Navbar/>
            <div className="container">
                <ProductForm operationType = "Edit"/>
            </div>
        </>
    )
}

export default EditProduct;