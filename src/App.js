import React from "react";
import ProductProvider from "./Provider/ProductProvider";
import Router from "./Route/Router";
const App=()=>{
    return(

        <ProductProvider>
           <Router/>
        </ProductProvider>

    )
}

export default App