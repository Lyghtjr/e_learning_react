import React from 'react';

const AboutOurMeetCard=(props)=>{
    return(
        <>
        <div className="col-lg-4 col-md-6 mb-5 mx-auto">
        <div class="container-fluid" style={{backgroundColor:"#fff", height:"150px"}}>
<div className="post-entry-1 h-100 person-1 mt-5">
<img src={props.imgSrc} style={{position:"absolute",left:"40%",top:"-22px",width: "80px",height:"100px",borderRadius:"50%",margin: "0 auto -45px auto"}} alt="Image" className="img-fluid" data-pagespeed-url-hash="139985025" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
<div className="post-entry-1-contents">
<div style={{height:"40px"}}></div>
<center>
<span className="meta">{props.status}</span>
<h2>{props.name}</h2>
</center>
<p>{props.about}</p>
</div>
</div>
</div>
</div>
        </>
    )
}
export default AboutOurMeetCard;