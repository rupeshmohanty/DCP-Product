import Navbar from "./sub-components/Navbar";
import ProductForm from "./sub-components/ProductForm";

const AddProduct = () => {
    const multipleProps = {
        operationType: "Add"
    };

    return(
        <>
            <Navbar/>
            <div className="container">
                <ProductForm params = { multipleProps }/>
            </div>
        </>
    )
}

export default AddProduct;