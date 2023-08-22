import { createContext } from "react";

const UserContext = createContext({
    info :{},
    userLogin : ()=>{}
})

export default UserContext;