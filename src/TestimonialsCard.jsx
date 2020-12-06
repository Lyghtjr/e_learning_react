import React from 'react';
import './index.css';

const TestimonialsCard=(props)=>{
return(
    <>
    <div className="col-md-4 col-10 mx-auto">
    <div className="card"style={{borderRadius: "7px",
    background:"#fff",
    padding:" 30px",
    borderBottom:"4px solid #0779e4",
    webkitBoxShadow:" 0 15px 30px 0 rgba(0,0,0,.1)",
    boxShadow: "0 15px 30px 0 rgba(0,0,0,.1)"}} >
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star f"></span>
    <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"</p>
    <img style={{height:"60px",width:"60px" ,borderRadius:"50px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR36pvaQWFXxPeZdw8VcZ0U3AeTxG5xIXnCIg&usqp=CAU" alt=".."/>
         <span style={{marginLeft:"10px"}}>Mike Fisher</span>
         <span style={{color:"#ccc" ,marginLeft:"5px"}}>Owner, Ford</span>
  </div>
</div>
    </div>
    </>
)
}

export default TestimonialsCard;