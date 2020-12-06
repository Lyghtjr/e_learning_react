import React from 'react';
import TestimonialsCard from './TestimonialsCard';
const Testimonials=()=>{
return(
    <div className="mt-5">
    <div className="container-fluid">
    <h4 className="text-center text-uppercase">Testimonials</h4>
    <h1 className="text-center text-uppercase bold " style={{color:"blue"}}>Student Reviews</h1>
    <div className="row">
        <div className="col-10 mx-auto">
            <div className="row gy-4">
                <TestimonialsCard title="Excellent Teacher!"/>
                <TestimonialsCard title="Best Video Tutorial!"/>
                <TestimonialsCard title="Easy to Understand!"/>
            </div>
            </div>
        </div>
    </div>
</div>
)
}
 
export default Testimonials;