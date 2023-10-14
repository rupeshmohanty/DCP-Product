import Navbar from "./sub-components/Navbar";
import ProductFormData from "./sub-components/ProductFormData";

const AddProduct = () => {
    const multipleProps = {
        operationType: "Add"
    };

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