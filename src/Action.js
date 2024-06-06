
export const addtocart=(item)=>{
    return{
        type:'ADDTOCART',
        payload:item,

    
    }

};

export const removefromcart=(itemid)=>{
    return{
        type:'REMOVEFROMCART',
        payload:itemid
    }

}

export const updatecartcount=()=>{
    return{
        type:'UPDATECART',
    
    }

}

