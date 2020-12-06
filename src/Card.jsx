import React from 'react';

const Card=(props)=>{
    return(
        <>    
                         
                        
                          <div className="col-md-2 col-10 mx auto">
                          <div className="card">
  <img src={props.imgSrc} className="card-img-top" alt="..."  height="100px"/>
</div>  
        
                      </div>
        </>
    )
}

export default Card;