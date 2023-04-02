import Header from "./components/header/Header";

import "normalize.css";
import "./scss/index.scss";
import { Outlet } from "react-router-dom";

function App() {
   return (
      <div className="wrapper">
         <div className="container">
            <Header />
            <Outlet/>
         </div>
      </div>
   );
}

export default App;
