import Navbar from "./sub-components/Navbar";
import ProductDetails from "./sub-components/ProductDetails";

const ProductPage = () => {
    return(
        <>
            <Navbar/>
            <div className="container">
                <ProductDetails/>
            </div>
        </>
    )
}

export default ProductPage;