import Navbar from "./sub-components/Navbar";
import EditProductForm from "./sub-components/EditProductForm";

const EditProduct = () => {
    return(
        <>
            <Navbar/>
            <div className="container">
                <EditProductForm/>
            </div>
        </>
    )
}

export default EditProduct;