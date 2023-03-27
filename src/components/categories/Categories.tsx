import s from "./Categories.module.scss";

const categories = ['Все'];

for (let i = 1; i <= 8; i++) {
    categories.push(`Корпус ${i}`)
}

const Categories = () => {    
   return (
      <div className={s.categories}>
         <ul>
            {categories.map((categoryName, i) => (
                <li key={i} className={i === 0 ? `${s.active}` : ''}>{categoryName}</li>
            ))}
         </ul>
      </div>
   );
};

export default Categories;
