import Navbar from "./sub-components/Navbar";
import ProductForm from "./sub-components/ProductForm";

const AddProduct = () => {
    return(
        <>
            <Navbar/>
            <div className="container">
                <ProductForm operationType = "Add"/>
            </div>
        </>
    )
}

export default AddProduct;