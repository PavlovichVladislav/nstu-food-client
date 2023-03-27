import Header from "./components/header/Header";
import Categories from "./components/categories/Categories";

import "normalize.css";
import "./scss/index.scss";
import Card from "./components/card/Card";

function App() {
   return (
      <div className="wrapper">
         <div className="container">
            <Header />
            <section className="content__top">
               <Categories />
            </section>
            <h2 className="content__title">Наши заведения</h2>
            <div className="content__items">
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
            </div>
         </div>
      </div>
   );
}

export default App;
