import React from "react";

const TutorialsCard=(props)=>{
return(
    <>
   <div className="col-md-4 col-10 mx-auto">
<div className="card ml-2 mb-5" >
  <img src={props.imgSrc} style={{height:"250px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div>
</div>
    </>

)
}
export default TutorialsCard;