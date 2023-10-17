import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./Components/Admin/Product/AddProduct";
import EditProduct from "./Components/Admin/Product/EditProduct";
import Album from "./Components/Admin/Product/sub-components/Album";
import ProductPage from "./Components/Admin/Product/ProductPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/add" element={<AddProduct/>}/>
          <Route path = "/edit/:id" element={<EditProduct/>}/>
          <Route path = "/" element={<Album/>}/>
          <Route path = "/product/:id" element={<ProductPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
