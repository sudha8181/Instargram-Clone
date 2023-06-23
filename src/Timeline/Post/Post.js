import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SendIcon from '@mui/icons-material/Send';
import SentimentSatisfiedAltRoundedIcon from '@mui/icons-material/SentimentSatisfiedAltRounded';
import PostData from "../../PostData";

const Post=(Props)=>{
return(
    <>
    <div className="post">
        <div className="post_header">
        
           <div className="post_info">
              <Avatar src={Props.user_profile}style={{margin: "0px 10px 0px 10px"}}>R</Avatar>
               {Props.name}.<span>12h</span>
            </div>
            <div className="post_more">
                <MoreHorizIcon/>
            </div>  
        </div>
        <div className="post_body">
            <div className="post_image">
            <img src={Props.user_post} alt="post_image" />
            </div>
            <div className="post_description">
                   <div className="post_icons">
                     <div className="postmain_icons">
                       <FavoriteBorderIcon className="icons"/>
                       <MapsUgcRoundedIcon className="icons"/>
                       <SendIcon className="icons share" />
                     </div>
                   <div className="postsave_icons">
                       <BookmarkBorderRoundedIcon/>
                  </div>
                   </div>
               
           
            <div className="likes">
                <p>{Props.like} likes</p>
                <p>view all comments</p>
            </div>
            </div>
        </div>
        <div className="post_comment">
        <SentimentSatisfiedAltRoundedIcon/>
        <input type="text" name="" id="" placeholder="Add Comments" className="comment" />
        <a href="#" className="posting">Post</a>
     
        </div>
    </div>
    </>
);
}

export default Post;