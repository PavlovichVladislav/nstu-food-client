import Header from "./components/header/Header";

import "normalize.css";
import "./scss/index.scss";
import { Outlet } from "react-router-dom";
import React from "react";

function App() {
   return (
      <div className="wrapper">
         <Header />
         <Outlet />
      </div>
   );
}

export default App;
