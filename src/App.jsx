import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import { useState, useEffect } from "react";
import {db} from "./data/db.js";

function App() {
  const [data, setData] = useState(db);
    const [cart, setCart] = useState([]);

    function addToCart(item){
        const productExist = cart.findIndex(product => product.id === item.id);
        if(productExist >= 0){
            const updateCart = [...cart];
            updateCart[productExist].quantity++;
            setCart(updateCart);
        }else{
            item.quantity = 1;
            setCart([...cart, item]);
        }
    }

    function removeFromCart(id){
       setCart(prevCart => prevCart.filter(product => product.id !== id));
    }

    function increaseQuantity(id){
        const updateCart = [...cart];
        const productExist = cart.findIndex(product => product.id === id);
        updateCart[productExist].quantity++;
        setCart(updateCart);
    }

  return (
    <>
      <Header 
        cart = {cart} 
        removeFromCart = {removeFromCart}
      />

      <main className="container-xl mt-5">
          <Home
              data={data}
              addToCart={addToCart}
          />
      </main>

      <Footer/>
    </>
  )
}

export default App
