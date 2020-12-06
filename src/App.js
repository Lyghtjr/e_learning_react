import React from 'react';
import {Switch,Route} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Blog from './Blog';
import Contact from './Contact';
import Testimonials from './Testimonials';
import Tutorials from './Tutorials';
import './index.css';
import Body from './Body.jsx';
import Footer from './Footer'



const App=()=>{
  return(<>
  <Body/>
<Switch>
  <Route exact path='/' component={Home}/>
  <Route exact path='/about' component={About}/>
  <Route exact path='/blog' component={Blog}/>
  <Route exact path='/contact' component={Contact}/>
  <Route exact path='/testimonials' component={Testimonials}/>
  <Route exact path='/tutorials' component={Tutorials}/> 
</Switch>
<br/>
<Footer/>

</>
  )
}

export default App;