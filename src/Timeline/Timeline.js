import React from "react";
import "./Timeline.css";
import Suggestion from "./Suggestion/Suggestion.js";
import Post from "./Post/Post.js"

import PostData from "../PostData";
import Story from "./Story";


const Timeline=()=>{

   return(
    <>
        <div className="timeline">
           <div className="timeline_left">
            <div className="header">
            {
            PostData.map((value)=>{
             return(
               <Story
               name={value.username}
               user_profile={value.user_profile}
               />
             );

            })}
            </div>
            <div className="timeline_post">
            {
            PostData.map((value)=>{
             return(
               <Post 
               name={value.username}
               user_profile={value.user_profile}
               user_post={value.user_post}
               like={value.likes}
               />
             );

            })}
           
            </div>
           </div>
           <div className="timeline_right">
            <Suggestion />
           
           </div>
        </div>
    </>
   );
}

export default Timeline;