import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import TutorialsCard from './TutorialsCard.jsx';

const TutorialsHome=()=>{
return(
    <>
    <div className="mt-5">
    <div style={{backgroundColor:"#f8f9fa",width:"100%",}}>
    <div className="container-fluid">
        <div className="row">
            <div className="col-10 mx-auto">
            <div className="mt-5 ">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{height:"50px",width:"50%",backgroundColor:"#efefef",float:"left"}}/>
      <button className="btn btn-success" type="submit" style={{height:"50px ", width:"70px"}}>Search</button>
  
    </div>
    <br/>
                <span style={{fontSize: "12px",
    textTransform: "uppercase",
    fontWeight: "700",
    letterSpacing: ".2rem",}}>Latest</span>
                <h1 style={{    fontSize: "30px",
    fontWeight: "700",
    color: "#0779e4",
}}>Tutorials</h1>
<br/>
                <div className="row gy-2">
                <TutorialsCard title="Design" imgSrc='https://www.inventologix.com/images/3D-shapes.jpg' />
                <TutorialsCard title="Marketing" imgSrc='https://assets.entrepreneur.com/content/3x2/2000/20190820185239-GettyImages-985550942.jpeg'/>
                <TutorialsCard title="IT & Software" imgSrc='https://www.edge.ai/wp-content/uploads/2017/12/Screen-Shot-2017-12-27-at-4.18.30-PM.png'/>
                <TutorialsCard title="Business" imgSrc='https://www.web4business.com.au/wp-content/uploads/2014/05/GoogleTools.jpg'/>
                <TutorialsCard title="Music" imgSrc='https://www.incimages.com/uploaded_files/image/1920x1080/getty_860462652_396419.jpg'/>
                <TutorialsCard title=" Development" imgSrc='https://previews.123rf.com/images/monsitj/monsitj1704/monsitj170400032/75527762-block-chain-network-and-programming-concept-on-technology-background.jpg'/>
            
            </div>
        </div>
        </div>
        </div>
    </div>
    </div>
    </>
)
}
export default TutorialsHome;