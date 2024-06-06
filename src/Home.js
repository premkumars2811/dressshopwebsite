import React from 'react';
import Header from './heading';
import './App.css'
import Content from './Content';
import Footer from './Components/Footer';
import Imageslider from './Components/Imageslider';
import Contenttitle from './Contenttitle';
import Authdetails from './component/Authdetails';
//import List from './Todolist';//

function Home() {
  return (
<>

 
  <Header/>
  <Imageslider/>
   <Contenttitle/>
   <Content/>
   <Footer/> 
   
  
   </>
  
 //<List/>//
  );
}
export default Home;
