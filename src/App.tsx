import Header from "./components/header/Header";
import Categories from "./components/categories/Categories";

import "normalize.css";
import "./scss/index.scss";
import Card from "./components/card/Card";
import Sort from "./components/sort/Sort";
import { useEffect, useState } from "react";
import RestuarantApi from "./api/RestuarantApi";
import { IRestuarant } from "./models/restuarant";
import Skeleton from "./components/card/Skeleton";

function App() {
   const [restuarants, setRestuarants] = useState<IRestuarant[]>([]);
   const [isLoading, setIsLoading] = useState(true);
   const restuarantsApi = new RestuarantApi();

   useEffect(() => {
      restuarantsApi.getAll().then((rests) => {
         setRestuarants(rests);
         setIsLoading(false);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

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
               {isLoading
                  ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
                  : restuarants.map((restuarant) => (
                       <Card key={restuarant.id} restaurant={restuarant} />
                    ))}
            </div>
         </div>
      </div>
   );
}

export default App;
