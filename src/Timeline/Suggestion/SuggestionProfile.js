import React from "react";
import "./SuggestionProfile.css"
import { Avatar } from "@mui/material";

const SuggestionProfile=(Props)=>{
    return(
        <>
            <div className="suggested_profile">
            <div className="profile_info">
             <Avatar  src={Props.user_profile} className="profile_logo">s</Avatar>
             <div className="profile_description">
              <p className="profile_name">{Props.name}</p> 
              <p className="follower">Followed by  taragurung +12 more</p>
             </div>
             
             </div>
            <div className="view">
              <a href="#">Follow</a>
            </div>
            
            </div>
            
        </>
    );
}

export default SuggestionProfile;