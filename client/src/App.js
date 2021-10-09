
import Routes from "./routes/index";
import { BrowserRouter } from "react-router-dom";

import '../src/index.css';
import 'antd/dist/antd.css';
const App = ()=>{

  

   return (
   <BrowserRouter>
    <Routes/>
   </BrowserRouter>
   )  
}

export default App;