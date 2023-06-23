import React from "react";
import logo from "../images/instagramwhite_logo.png";
import "./Sidenav.css";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import MessageIcon from '@mui/icons-material/Message';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';

const Sidenav=()=>{
   return(
     <>
       <div className="sidenav">
        <img  className="sidenav_logo" src={logo} alt="instagram-logo" />
        <div className="sidenav_buttons">
        
            <button className="side_button">
             <HomeIcon/>
            <span>Home</span>
            </button>

            <button className="side_button">
             <SearchIcon/>
            <span>Search</span>
            </button>

            <button className="side_button">
             <ExploreIcon/>
            <span>Explore</span>
            </button>

            <button className="side_button">
             <SmartDisplayOutlinedIcon/>
            <span>Reels</span>
            </button>

            <button className="side_button">
             <MessageIcon/>
            <span>Message</span>
            </button>

            <button className="side_button">
             <FavoriteBorderIcon/>
            <span>Notification</span>
            </button>
            
            
            <button className="side_button">
             <AddBoxOutlinedIcon/>
            <span>Create</span>
            </button>
            {/* More button*/}
            <div className="morebutton">
            <button className="side_button">
             <ReorderOutlinedIcon/>
            <span>More</span>
            </button>
            </div>
        </div>
       </div>
    </>
   );
}

export default Sidenav;