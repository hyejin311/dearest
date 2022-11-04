import React from "react";
import Nav from "./Nav";

function App({children}){
    return(
        <div id="wrap">
        <Nav />
        {children}
        </div>
    )
}

export default App;