import Navbar from "./sub-components/Navbar";
import ProductFormData from "./sub-components/ProductFormData";

const AddProduct = () => {
    return(
        <>
            <Navbar/>
            <div className="container">
                <ProductFormData/>
            </div>
        </>
    )
}

export default AddProduct;