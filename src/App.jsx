import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import MealsShow from "./Components/Meals/MealsShow";
import React, {useState} from "react";

function App() {
  
  const [isCartOpen, setIsCardOpen] = useState(false)
  const cardOpenHandler = () => {
    setIsCardOpen(true)
  }
  const cardCloseHandler = () => {
    setIsCardOpen(false)
  }
  return (
    <>
    {isCartOpen && <Cart onClosed = {cardCloseHandler}/>}
    <Header onOpenCart = {cardOpenHandler}/>
    <main>
      <MealsShow/>
    </main>
    </>
  );
}

export default App;
