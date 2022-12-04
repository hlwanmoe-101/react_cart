import React, {createContext, useState} from "react";

export const ProductContext= createContext();
const ProductProvider=({children})=>{
    const [todoAddList,setTodoAddList]=useState([])
    return(
        <ProductContext.Provider  value={{
                todoAddList,
                setTodoAddList,
                addToCart:(products)=>{
                    setTodoAddList([...todoAddList,products])
                }
            }}>
            {children}
        </ProductContext.Provider>
    )
}
export default ProductProvider
