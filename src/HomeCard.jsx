import React from "react";

const HomeCard=()=>{
return(
    <>
    <div className="container-fluid col-md-12 mb-3" >
<div className="d-flex align-items-center">
<div className="img" style={{height:"70px",width:"70px"}}><img src="https://preview.colorlib.com/theme/tutor/images/img_2.jpg" className="img-fluid" alt="Image" data-pagespeed-url-hash="1893307294" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/></div>
<div className=" col-6  text">
<a href="#" className="category" style={{transition: ".3s all ease",textDecoration: "none",color: "#0779e4",fontSize: "11px",textTransform: "uppercase",fontWeight: "700",letterSpacing:" .1rem"}}>Tutorial</a>
<p><a href="#" style={{transition: ".3s all ease",textDecoration: "none",color:"black",fontSize:"18px"}}>Learning React Native</a></p>
</div>
</div>
</div>
    </>
)
}
export default HomeCard;