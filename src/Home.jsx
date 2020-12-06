import React from 'react';
import './index.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Courses from './Courses.jsx';
import TutorialsHome from './TutorialsHome';
import Testimonials from './Testimonials.jsx';
import HomeCard from './HomeCard.jsx';

const Home=()=>{
return(
    <>
   
      <Courses/>
      <br/>
      <TutorialsHome/>
    <br/>
      <Testimonials/>
      

    </>
)
}
 
export default Home;