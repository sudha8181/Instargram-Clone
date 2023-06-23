import React from 'react';
import "./Story.css";
import { Avatar } from "@mui/material";

const Story=(Props)=>{
return(
    <>
    <div className="timeline_story">
<Avatar src={Props.user_profile} className="avatar">R</Avatar>
<p>{Props.name}</p>
</div>
    </>
)
}
export default Story;


