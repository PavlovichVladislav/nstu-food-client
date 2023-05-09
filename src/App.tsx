import Header from "./components/header/Header";

import "normalize.css";
import "./scss/index.scss";
import { Outlet } from "react-router-dom";
import React from "react";

export const SearchContext = React.createContext({ search: "", changeSearch: (value: string) => {} });

function App() {
   const [search, setSearch] = React.useState("");

   return (
      <div className="wrapper">
            <SearchContext.Provider value={{ search, changeSearch: setSearch }}>
               <Header />
               <Outlet />
            </SearchContext.Provider>
      </div>
   );
}

export default App;
