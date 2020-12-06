import React from 'react';

const AboutCard=()=>{
return(
    <>
    <div className="mt-5">
    <div className="container-fluid">
    <div className="row">
    <div className="col-10 mx-auto">
    <div className=" mb-3">
  <div className="row no-gutters">
    <div className="col-md-8">
    <div className="card-body">
        <h5 className="card-title" style={{fontSize: "12px",textTransform: "uppercase",fontWeight: "700",letterSpacing: ".2rem"}}>About US</h5>
        <p className="card-text" style={{fontSize: "30px",fontWeight: "700",color: "#0779e4",textTransform: "uppercase"}}>Our Company</p>
        <p style={{fontSize:"16px"}}>Abhianna is an online learning platform featuring 100+ vedio courses taught<br/> by expert instructors. Take courses in anything from programming languages<br/> like Python,C++ and Java to personal development classes like design,<br/>drawing and writing.Join the students who are mastering new skills,advancing <br/> their carrers and exploring new hobbies on Abhianna.</p>
        </div>
     </div>
    <div className="col-md-4">
      <img src="https://preview.colorlib.com/theme/tutor/images/hero_bg.jpg" className="card-img" alt="..."/>
    
      </div>
    </div>
</div>
    </div> 
    </div>
    </div>
    </div>
    </>
)
}

export default AboutCard;