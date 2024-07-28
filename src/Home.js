import React from 'react';
import Header from './Components/Header/heading';
import './App.css'
import Content from './Components/Content/Content';
import Imageslider from './Components/Imageslider/Imageslider';
import Contenttitle from './Components/Contenttitle/Contenttitle';
import Footer from './Components/Footer/Footer';


function Home({addtocart}) {
  return (
       
       <>
      <Header/>
      <Imageslider/>
      <Contenttitle/>
      <Content addtocart={addtocart}/>
      <Footer/>
       </>
     
);
}

export default Home;
