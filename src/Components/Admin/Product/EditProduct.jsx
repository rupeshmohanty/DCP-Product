import { useParams } from "react-router-dom";
import Navbar from "./sub-components/Navbar";
import EditProductForm from "./sub-components/EditProductForm";

const EditProduct = () => {
    const { id } = useParams();

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