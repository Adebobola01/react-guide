import React from "react";

const authContext = React.createContext({
    authentcated: false,
    login: ()=>{}
})


export default authContext;