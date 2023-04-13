import Header from "./components/header/Header";

import "normalize.css";
import "./scss/index.scss";
import { Outlet } from "react-router-dom";
import Paging from "./components/pagination";

function App() {
   return (
      <div className="wrapper">
         <div className="container">
            <Header />
            <Outlet />
            <Paging totalPages={5}/>
         </div>
      </div>
   );
}

export default App;
