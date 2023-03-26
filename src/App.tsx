import Header from "./components/header/Header";
import Categories from "./components/categories/Categories";

import "normalize.css";
import "./scss/index.scss";

function App() {
   return (
      <div className="wrapper">
         <div className="container">
            <Header />
            <section className="content__top">
               <Categories />
            </section>
         </div>
      </div>
   );
}

export default App;
