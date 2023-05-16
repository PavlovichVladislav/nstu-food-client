import Header from "./components/header/Header";

import "normalize.css";
import "./scss/index.scss";
import { Outlet } from "react-router-dom";
import ModalRegistration from "./components/modalRegistration/ModalRegistration";

function App() {
   return (
      <div className="wrapper">
         <Header />
         <Outlet />
         <ModalRegistration/>
      </div>
   );
}

export default App;
