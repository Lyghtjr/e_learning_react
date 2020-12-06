import React from 'react';
import AboutOurMeetCard from './AboutOurMeetCard';
import abhi from './abhi.jpg';

const AboutMeetOurTeam =()=>{

return(
    <>
    
<div className="site-section bg-light">
<div className="container">
<div className="row justify-content-center text-center mb-5 section-2-title">
<div className="col-md-6">
<div className="heading mb-4">
<div className="mt-5">
<span className="caption" style={{fontSize: "12px",textTransform:"uppercase",fontWeight:"700",letterSpacing: ".2rem"}}>The team</span>
<h2 style={{fontSize: "30px",fontWeight: "700",color: "#0779e4",textTransform:"uppercase"}}>Meet Our Team</h2>
</div>
</div>
</div>
<div className="mt-5"></div>
<div className="row align-items-stretch">
<AboutOurMeetCard imgSrc={abhi} name="Abhinav Rai" status="Founder" />
<AboutOurMeetCard name="Tamanna Sharma" status="Founder" imgSrc="https://png.pngtree.com/png-clipart/20190516/original/pngtree-cute-girl-avatar-material-png-image_4023832.jpg"/>
</div>
</div>
</div>
</div>
   </> 
)
}

export default AboutMeetOurTeam;