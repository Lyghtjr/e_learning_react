import Card from './Card';
import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './index.css';

const Courses =()=>{
    return(
        <>
        <div className="mt-5">
            <div className="container-fluid ">
                <div className="row">
                  <div className="col-10 mx-auto">
                      <span className="tutorials_couses">Tutorial Courses</span>
                      <h3 className="choose_courses">Choose Courses</h3>
                      <br/>
                      <div className="row gy-2">
                           <Card imgSrc="https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular-760x400.png"/>
                           <Card imgSrc="https://cdn.vox-cdn.com/thumbor/vNGNxVAhztPIMvpecZETrPvBXfw=/30x0:990x640/1200x800/filters:focal(30x0:990x640)/cdn.vox-cdn.com/assets/2805141/photoshop.png"/>
                           <Card imgSrc="https://i.pinimg.com/originals/50/a6/42/50a6428d99f98e808074cceaf4c755e7.png"/>
                           <Card imgSrc="https://blogassets.techpikk.com/uploads/2017/12/vuejs-logo.jpg"/>
                           <Card imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png"/>
                           <Card imgSrc="https://www.nicepng.com/png/detail/80-804192_smartlogic-explores-javascript-react-and-flux-tech-react.png"/>
                           
                  </div>        
                   </div>
                   </div>
                </div>
            </div>

        </>
    )
}

export default Courses;