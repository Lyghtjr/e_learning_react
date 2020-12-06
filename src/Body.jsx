import React from 'react';
import './index.js';
import Header from './Header';
const Body=()=>{
return(
<>
<div className="bgImage">
<Header/>
<div style={{height:"300px"}}></div>
<div className="container-fluid ">
    <div className="row align-items-center justify-content-center">
         <div className="col-10 text-center">
            <h1 style={{color:"#fff", lineHeight: "1",fontSize: "35px",fontWeight:"320"}}>The <strong>Hub</strong> of <strong>Tutorials</strong></h1>
         </div>
    </div>
    </div>
</div>
</>
)
}
export default Body;