import React from "react";
import "./style.css";
import {BrowserRouterDom, Switch,Link,Route} from 'react-router-dom'
import About from './Components/About'
import Home from './Components/Home'
import Contact from './Components/Contact'

export default function App() {
  return (
    <BrowserRouterDom>
     <div>
       <h1>Hello World</h1>
       <p>Start editing / building</p>
       <ul>
         <li>
           <Link to="/">Home </Link>
         </li>
         <li>
            <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact </Link>
         </li>
       </ul>
       <Switch>
         <Route exact 
         path="/">
          <Home/>
          </Route>
         <Route path="/about" >
           <About/>
         </Route>
         <Route path="/contact" >
           <Contact/>
           </Route>
        </Switch>   
     </div>
    </BrowserRouterDom>
  );
}
