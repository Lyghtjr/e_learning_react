import React from 'react';

const Contacts=()=>{
return(
   <>
     <div className="my-5">
            <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
              <div ClassName="col-md-6 col-10 mx-auto">
              <form >
              <div className="form-group">
    <label >FullName</label>
    <input  name='fullname' type="text" className="form-control"  aria-describedby="emailHelp"/>

  </div>
  <br/>
              <div className="form-group">
    <label >Phone Number</label>
    <input  name='phone' type="number" className="form-control"  aria-describedby="emailHelp"/>

  </div>
  <br/>
  <div className="form-group">
    <label >Email address</label>
    <input autoComplete="off"  name='email' type="email" className="form-control"  aria-describedby="emailHelp"/>

  </div>
  <br/>
  <div className="form-group">
    <textarea rows=' ' columns='' style={{width:"100%", height:"100px"}}/>
  </div>
   <br/>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
              </div>
            </div>
        </div>
    
   </>
)
}
 
export default Contacts;