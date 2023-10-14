import Navbar from "./sub-components/Navbar";
import ProductForm from "./sub-components/ProductForm";
import TempProductForm from "./sub-components/TempProductForm";

const AddProduct = () => {
    const multipleProps = {
        operationType: "Add"
    };

    return(
        <>
            <Navbar/>
            <div className="container">
                {/* <ProductForm params = { multipleProps }/> */}
                <TempProductForm/>
            </div>
        </>
    )
}

export default AddProduct;