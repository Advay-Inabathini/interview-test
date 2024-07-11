import { useState } from 'react'

import './style.css'

import Header from './components/Header'
import ItemCard from './components/ItemCard'
import FrequentlyOrdered from './components/FrequentlyOrdered'


function App() {

  const items = [
    {name: "Caribbean Spicy Zinger Burger", calories: 350, price: 319, quantity: 1, image: "./src/assets/Burger.png"},
    {name: "Cajun Veg Burger", calories: 250, price: 219, quantity: 2, image: "./src/assets/burger2.png" }
  ]

  const frequentlyOrdered = [
    { name: "Fanta - 1 PET", price: 89, image: "./src/assets/Fanta.png" },
    { name: "Fanta - 1 PET", price: 89, image: "./src/assets/Fanta.png" },
    { name: "Fanta - 1 PET", price: 89, image: "./src/assets/Fanta.png" },
  ];

  return (
    <>
      <div>
        <Header />
        {items.map( (item, index) => (
          <ItemCard key={index} item={item} />
        ))}
        <FrequentlyOrdered items = {frequentlyOrdered} />

      </div>
    </>
  )
}

export default App
