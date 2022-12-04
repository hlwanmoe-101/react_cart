import React, {useContext, useEffect, useState} from "react";
import ProductProvider, {ProductContext} from "../Provider/ProductProvider";


const HomePage= props=>{

    const [product,setProducts]=useState([])
    const [loading,setLoading]=useState(true)

    const {addToCart,todoAddList,setTodoAddList}=useContext(ProductContext)

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                setProducts(json)
                setLoading(false)
            })
    },[])

    return(
        <div className="container">
            {
                loading ? (
                    <div className="d-flex justify-content-center align-items-center flex-column" style={{height:"100vh"}}>
                        <div className="spinner-border text-primary" role="status" style={{width:"3rem",height:"3rem"}}>
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <h3 className="mt-3">Loading Products...</h3>
                    </div>


                ) : (
                    <div className="row">
                        {
                            product.map((products)=>{
                                return(
                                    <div className="col-12 col-lg-3">
                                        <div className="card mt-3" style={{height:"25rem"}}>
                                            <div className="d-flex justify-content-center align-items-center py-5">
                                                <img src={products.image} className="card-img-top" style={{width:"100px"}} alt="..."/>
                                            </div>

                                            <div className="card-body d-flex flex-column justify-content-end">
                                                <hr/>
                                                <h6 className="card-title">{products.title.substring(0,20)+"..."}</h6>
                                                <p className="text-muted">{products.category}</p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="text-success fw-bold m-0">${products.price}</p>
                                                    <div className="d-flex justify-content-end">
                                                        <button className="btn btn-sm btn-outline-secondary me-2">
                                                            <i className="fa-sharp fa-solid fa-circle-info"></i>
                                                        </button>
                                                        <button onClick={()=>{addToCart(products)}} className="btn btn-sm btn-outline-primary">
                                                            <i className="fa-solid fa-cart-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
        </div>
    )
}
export default HomePage