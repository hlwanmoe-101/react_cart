import React, {useContext} from "react";
import ProductProvider, {ProductContext} from "../Provider/ProductProvider";

const CratPage= props=>{
    const {todoAddList}=useContext(ProductContext)
    return(
        <div>
            {
                todoAddList.map((data)=>{
                    return(
                        <h1>{data.title}</h1>
                    )
                })
            }
        </div>
    )
}
export default CratPage