import React from "react";
import Sidenav from "./Navigation/Sidenav";
import Timeline from "./Timeline/Timeline";
import "./HomePage.css";

const HomePage=()=>{
return(
    <>
    <div className="homepage">
        <div className="homepage_nav" >
            <Sidenav/>
        </div>
        <div className="homepage_timeline" style={{background:"#151414"}}>
            <Timeline/>
        </div>
    </div>
    </>
);
    

}

export default HomePage;