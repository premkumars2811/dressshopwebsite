import React from "react";
import { Provider } from 'react-redux';
import store from "./Store";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import Header from "./heading";


function App(){
  return(

    <BrowserRouter>
 <Provider store ={store}>
 
  <Routing/>

</Provider>
</BrowserRouter>



  )
}
export default App;