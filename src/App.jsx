import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import All from './Components/All';
import FullStack from './Components/FullStack';
import DataScience from './Components/DataScience';
import CyberSecurity from './Components/CyberSecurity';
import Career from './Components/Career';

const App = () => {
  let data=[{
    image:'https://blog.eduonix.com/wp-content/uploads/2018/09/Full-Stack-Developer.jpg',
    head:"Full Stack Development",
    date:"30",
    month:"january",
  },{
    image:'https://d1m75rqqgidzqn.cloudfront.net/wp-data/2019/09/11134058/What-is-data-science-2.jpg',
    head:"data science",
    date:"10",
    month:"february",
  },
  {
    image:'https://st4.depositphotos.com/22162388/23954/i/450/depositphotos_239549088-stock-photo-cyber-security-data-protection-information.jpg',
    head:"cyber security",
    date:"15",
    month:"march",
  },
  {
    image:'https://thumbs.dreamstime.com/b/side-view-businessman-climbing-abstract-drawn-stairs-business-sketch-concrete-background-career-development-finance-117575056.jpg',
    head:"career",
    date:"18",
    month:"August",
  },{
    image:'https://blog.eduonix.com/wp-content/uploads/2018/09/Full-Stack-Developer.jpg',
    head:"Full Stack Development",
    date:"16",
    month:"june",
  },{
    image:'https://d1m75rqqgidzqn.cloudfront.net/wp-data/2019/09/11134058/What-is-data-science-2.jpg',
    head:"data science",
    date:"10",
    month:"february",
  },{
    image:'https://st4.depositphotos.com/22162388/23954/i/450/depositphotos_239549088-stock-photo-cyber-security-data-protection-information.jpg',
    head:"cyber security",
    date:"15",
    month:"march",
  },{
    image:'https://thumbs.dreamstime.com/b/side-view-businessman-climbing-abstract-drawn-stairs-business-sketch-concrete-background-career-development-finance-117575056.jpg',
    head:"career",
    date:"18",
    month:"August",
  },
  {
    image:'https://blog.eduonix.com/wp-content/uploads/2018/09/Full-Stack-Developer.jpg',
    head:"Full Stack Development",
    date:"25",
    month:"April",

  },
  {
    image:'https://d1m75rqqgidzqn.cloudfront.net/wp-data/2019/09/11134058/What-is-data-science-2.jpg',
    head:"data science",
    date:"26",
    month:"march",
  },
  {
    image:'https://st4.depositphotos.com/22162388/23954/i/450/depositphotos_239549088-stock-photo-cyber-security-data-protection-information.jpg',
    head:"cyber security",
    date:"16",
    month:"octber",
  },
  {
    image:'https://thumbs.dreamstime.com/b/side-view-businessman-climbing-abstract-drawn-stairs-business-sketch-concrete-background-career-development-finance-117575056.jpg',
    head:"career",
    date:"19",
    month:"september",
  },
  {
    image:'https://blog.eduonix.com/wp-content/uploads/2018/09/Full-Stack-Developer.jpg',
    head:"Full Stack Development",
    date:"23",
    month:"may",
  },
  {
    image:'https://d1m75rqqgidzqn.cloudfront.net/wp-data/2019/09/11134058/What-is-data-science-2.jpg',
    head:"data science",
    date:"11",
    month:"November",
  },
  {
   
    image:'https://st4.depositphotos.com/22162388/23954/i/450/depositphotos_239549088-stock-photo-cyber-security-data-protection-information.jpg',
    head:"cyber security",
    date:"14",
    month:"august",
},
{
    image:'https://thumbs.dreamstime.com/b/side-view-businessman-climbing-abstract-drawn-stairs-business-sketch-concrete-background-career-development-finance-117575056.jpg',
    head:"career",
    date:"20",
    month:"december",
},
{
  image:'https://blog.eduonix.com/wp-content/uploads/2018/09/Full-Stack-Developer.jpg',
    head:"Full Stack Development",
    date:"21",
    month:"oct",
},
{
  image:'https://d1m75rqqgidzqn.cloudfront.net/wp-data/2019/09/11134058/What-is-data-science-2.jpg',
    head:"data science",
    date:"13",
    month:"August",
},
{
  image:'https://st4.depositphotos.com/22162388/23954/i/450/depositphotos_239549088-stock-photo-cyber-security-data-protection-information.jpg',
    head:"cyber security",
    date:"18",
    month:"july",
},
{
  image:'https://thumbs.dreamstime.com/b/side-view-businessman-climbing-abstract-drawn-stairs-business-sketch-concrete-background-career-development-finance-117575056.jpg',
  head:"career",
  date:"12",
  month:"december",
},
{
  image:'https://blog.eduonix.com/wp-content/uploads/2018/09/Full-Stack-Developer.jpg',
    head:"Full Stack Development",
    date:"21",
    month:"oct",
},
{
  image:'https://d1m75rqqgidzqn.cloudfront.net/wp-data/2019/09/11134058/What-is-data-science-2.jpg',
    head:"data science",
    date:"13",
    month:"August",
},
{
  image:'https://st4.depositphotos.com/22162388/23954/i/450/depositphotos_239549088-stock-photo-cyber-security-data-protection-information.jpg',
    head:"cyber security",
    date:"18",
    month:"july",
},
{
  image:'https://thumbs.dreamstime.com/b/side-view-businessman-climbing-abstract-drawn-stairs-business-sketch-concrete-background-career-development-finance-117575056.jpg',
  head:"career",
  date:"12",
  month:"december",
}
  
 
  ]
  return (
   
    <div>
     {/* <h1>App</h1> */}
     <BrowserRouter>
     <div>
      <Navbar/>
     </div>
     <Routes>
      <Route  path='/' element={<All data={data}/>}/>
      <Route path='/Fullstack' element={<FullStack data={data}/>}/>
      <Route path='/datascience' element={<DataScience data={data}/>}/>
      <Route path='/cybersecurity' element={<CyberSecurity data={data}/>}/>
      <Route path='/career' element={<Career data={data}/>}/>

     
     </Routes>
     </BrowserRouter>
    </div>
  );
};

export default App;