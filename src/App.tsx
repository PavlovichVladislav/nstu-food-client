import Header from "./components/header/Header";
import Categories from "./components/categories/Categories";
import restuarants from "./assets/restuarants.json";

import "normalize.css";
import "./scss/index.scss";
import Card from "./components/card/Card";
import Sort from "./components/sort/Sort";

function App() {
   return (
      <div className="wrapper">
         <div className="container">
            <Header />
            <section className="content__categories">
               <Categories />
            </section>
            <div className="content__top">
               <h2 className="content__title"> Наши заведения</h2>
               <Sort />
            </div>
            <div className="content__items">
               {restuarants.map((restuarant) => (
                  <Card key={restuarant.id} restaurant={restuarant} />
               ))}
            </div>
         </div>
      </div>
   );
}

export default App;
