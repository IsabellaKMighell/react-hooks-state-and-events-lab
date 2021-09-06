import React , {useState} from "react";

function Item({ name, category }) {
  const [cart, setCart]=useState(false)

  function handleAddToCart(){
    setCart(!cart)
  }
  const color = cart ? "pink" : "yellow"

  return (
    <li className= {cart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart} style={{ background: color }}>
        {cart ? "Remove from Cart":"Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
