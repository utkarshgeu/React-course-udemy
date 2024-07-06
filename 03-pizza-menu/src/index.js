import React from "react";
import ReactDom from "react-dom/client";
// import App from "./App.js"
// import CMP1 from "./Component1.jsx";

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  

function Header(){
   return <h1>Fast React Pizza Co.</h1>
}

function Menu(){
    return <div>
      <h2>Our Menu</h2>
      <Pizza/>
    </div>
}

function Footer(){
   return <h1>We are currently open!</h1>
}

function Pizza(){
    return (<>
        <img src="pizzas/spinaci.jpg"  alt="Pizza"/>
        <h1>Focaccia</h1>
        <h2>Bread with italian olive oil and rosemary</h2>
    </>)
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
    <Header/>
    <Menu/>
    <Footer/>
    </React.StrictMode>
    );