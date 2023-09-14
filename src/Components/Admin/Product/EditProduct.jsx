import { useParams } from "react-router-dom";
import Navbar from "./sub-components/Navbar";
import ProductForm from "./sub-components/ProductForm";

const EditProduct = () => {
    const { id } = useParams();

    const multipleProps = {
        id: id,
        operationType: "Edit"
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

export default EditProduct;