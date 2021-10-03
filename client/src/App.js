
import Routes from "./routes/index";
import { BrowserRouter } from "react-router-dom";

import '../src/index.css';
const App = ()=>{

  

   return (
   <BrowserRouter>
    <Routes/>
   </BrowserRouter>
   )  
}

export default App;