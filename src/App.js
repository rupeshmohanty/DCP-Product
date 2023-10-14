import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./Components/Admin/Product/AddProduct";
import EditProduct from "./Components/Admin/Product/EditProduct";
import ViewProducts from "./Components/Admin/Product/ViewProducts";
import TempProductForm from "./Components/Admin/Product/sub-components/TempProductForm";
import Album from "./Components/Admin/Product/sub-components/Album";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/add" element={<AddProduct/>}/>
          <Route path = "/album" element={<Album/>}/>
          <Route path = "/edit/:id" element={<EditProduct/>}/>
          <Route path = "/" element={<ViewProducts/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
