import React from 'react';
import BlogCard from './BlogCards';

const Blog=()=>{
return(
    <>
 
    <div className="container-fluid mt-5 ">
     <div className="row">
         <div className="col-10 mx-auto">
             <div className="row">
                 <BlogCard imgSrc="https://zdnet2.cbsistatic.com/hub/i/r/2020/04/07/b7fc1c16-6daf-42f4-a17d-dea35eb9843d/resize/1200x900/025f640f9a9e8272bf664c3bab78972d/monitors-wfh-intro-pic.jpg"/>
                 <BlogCard imgSrc="https://c0.wallpaperflare.com/preview/869/604/1017/business-laptop-computer-keyboard.jpg"/>
                 <BlogCard imgSrc="https://lh3.googleusercontent.com/proxy/3lFrbiay9aGZoLsYz6FtRHrXuyGxfFzXB7t3EoWJO_pTagN_Wq2hBb8LaKrCc8ML3danctj7Uu9D7SLX5c5-xLGqPZ3MlTIpQW6RPca6FtirpiFSUfuaRHkMmg3VDvyI_WxYHOmu"/>
                 <BlogCard imgSrc="https://preview.colorlib.com/theme/tutor/images/img_1.jpg" />
                 <BlogCard imgSrc="https://www.roberthalf.com/sites/default/files/2017-08/xExcel-Tools-AT-08-15-2017.jpg"/>
                 <BlogCard imgSrc="https://cdn.cnn.com/cnnnext/dam/assets/200416135957-chain-mail-restricted-large-169.jpg"/>
             </div>

         </div>
     </div>
    </div>
</>
)
}
 
export default Blog;