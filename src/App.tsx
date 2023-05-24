import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";

import ModalRegistration from "./components/modalRegistration/ModalRegistration";
import ModalAuth from "./components/modalAuth/ModalAuth";

import "normalize.css";
import "./scss/index.scss";

function App() {
   return (
      <div className="wrapper">
         <Header />
         <Outlet />
         <ModalRegistration />
         <ModalAuth />
      </div>
   );
}

export default App;
