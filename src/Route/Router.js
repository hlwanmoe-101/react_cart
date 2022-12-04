import React from "react";
import {BrowserRouter, Link, Routes,Route} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import CratPage from "../Pages/CratPage";
import WhiteListPage from "../Pages/WhiteListPage";

const Router= props=>{
    return(
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg bg-light position-sticky top-0" style={{zIndex:"1000"}}>
                <div className="container">
                    <a className="navbar-brand" href="/">React Cart App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-primary" type="submit">Search</button>
                        </form>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">

                                <Link className="nav-link" to="/"><i className="fa-solid fa-house me-2"></i>Home</Link>
                            </li>
                            <li className="nav-item">

                                <Link className="nav-link" to="/cart"><i className="fa-solid fa-cart-shopping me-2"></i>Cart</Link>
                            </li>
                            <li className="nav-item">

                                <Link className="nav-link" to="/wl"><i className="fa-solid fa-heart me-2"></i>White List</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/cart" element={<CratPage/>}/>
                <Route path="/wl" element={<WhiteListPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router