import React from 'react';
import AboutCard from './AboutCard.jsx';
import AboutMeetOurTeam from './AboutMeetOurTeam.jsx';
const About=()=>{
return(
    <>
    <br/>
    <AboutCard/>
     <br/>
     <AboutMeetOurTeam/>
    <br/>
     <div className="mt-5">
    <div className="container-fluid">
    <div className="row">
    <div className="col-10 mx-auto">
    <div className=" mb-3">
  <div className="row no-gutters">
    <div className="col-md-4">
    <img src="https://preview.colorlib.com/theme/tutor/images/hero_bg.jpg" className="card-img" alt="..."/>
     </div>
    <div className="col-md-8 ">
      <div className="card-body ">
        <h5 className="card-title " style={{fontSize: "12px",textTransform: "uppercase",fontWeight: "700",letterSpacing: ".2rem"}}>WHY FOUNDED</h5>
        <p className="card-text " style={{fontSize: "30px",fontWeight: "700",color: "#0779e4",textTransform: "uppercase"}}>Our Aim</p>
        <p style={{fontSize:"16px"}} >The aim is to enhance the quality of learning and teaching. We are providing this platform to meet the learning style or needs of students, to improve the efficiency and effectiveness of learning and teaching. We are working on to improve user-accessibility and time flexibility to engage learners in the learning process.Students should be able to access the courses,they are interested in, any time and from any where
To decrease the proportion of lectures and increase the proportion of individual work in the study process.</p>
        </div>  
      </div>
    </div>
</div>
    </div> 
    </div>
    </div>
    </div>
</>)
}
 
export default About;