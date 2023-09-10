import Navbar from "./sub-components/Navbar";
import ProductViewComponent from "./sub-components/ProductViewComponent";

const ViewProducts = () => {
    return(
        <>
            <Navbar/>
            <div className="container" style={{ marginTop: '40px' }}>
                <ProductViewComponent/>
            </div>
        </>
    )
}

export default ViewProducts;