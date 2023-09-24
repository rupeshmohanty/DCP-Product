import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div class="container-fluid">
                <Link class="navbar-brand">Navbar</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <Link class="nav-link active" aria-current="page">Home</Link>
                    </li>
                    <li class="nav-item">
                    <Link to = "/add" class="nav-link">Add Product</Link>
                    </li>
                    {/* <li class="nav-item dropdown">
                    <Link class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </Link>
                    <ul class="dropdown-menu">
                        <li><Link class="dropdown-item">Action</Link></li>
                        <li><Link class="dropdown-item">Another action</Link></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><Link class="dropdown-item">Something else here</Link></li>
                    </ul>
                    </li> */}
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;