import { useEffect, useState } from "react";
import UserContext from "./userContext";

function ContextProvider(props){
    const [data,setData] = useState({});

    let handleLogin=(item)=>{
        setData(item);
    }

    useEffect(()=>{
        console.log(data)
    },[data])


    return(
        <UserContext.Provider value={{
            info:data,
            userLogin : handleLogin,
        }} >
            {props.children}
        </UserContext.Provider>
    )
}

export default ContextProvider;