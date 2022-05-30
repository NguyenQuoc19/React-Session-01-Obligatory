import './App.css';
import Clothing from './Components/Clothing';
import ClothingData from './Data/ClothingData';

import TV from './Components/TV';
import TVData from './Data/TVData';
import Technology from './Components/Technology';
import TechnologyData from './Data/TechnologyData';

function App() {
  return(
    <div>
      <h1>Clothing & Apparel</h1>
      {
        ClothingData.map((clothing) => {
          const {urlImage, name, text1, text2, text3, text4} = clothing
          return (
            <Clothing key={name} urlImage={urlImage} name={name} text1={text1} text2={text2} text3={text3} text4={text4} />
          );
        })
      }
      <hr/>

      <h1>SaleTiVi</h1>
      {
        TVData.map((tv) => {
          const {urlImage, nameShop, nameTV, number, unit, price} = tv

          return (
            <TV key={nameTV} urlImage={urlImage} nameShop={nameShop} nameTV={nameTV} number={number} unit={unit} price={price}/>
          )
        })
      }
      <hr/>

      <h1>Technology</h1>
      {
        TechnologyData.map((technology) => {
          const {urlImage, type, name, date, by} = technology

          return (
            <Technology key={by} urlImage={urlImage} type={type} name={name} date={date} by={by}/>
          )
        })
      }
      <hr/>
    </div>
  );
}

export default App;
