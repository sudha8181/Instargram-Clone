import React from "react";
import "./Suggestion.css";
import { Avatar } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SendIcon from '@mui/icons-material/Send';
import SentimentSatisfiedAltRoundedIcon from '@mui/icons-material/SentimentSatisfiedAltRounded';
import SuggestionProfile from "../Suggestion/SuggestionProfile";
import "../Suggestion/SuggestionProfile.css";
import PostData from "../../PostData";

const Suggestion=()=>{
return(
    <>
    <div className="suggestion" >
        <div className="suggestion_header">
           <p>Suggested For You</p>
           <a href="#">See All</a>
           </div>
           <div className="profiles">
           {
            PostData.map((value)=>{
             return(
               <SuggestionProfile
               name={value.username}
               user_profile={value.user_profile}
               
               />
             );

            })}
           
             
            </div>
       
        </div>
      

    </>
);
}

export default Suggestion;