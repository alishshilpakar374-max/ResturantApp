import { nanoid } from "@reduxjs/toolkit";

export const alcoholicDrinks = [
  {
    id: nanoid(),
    name: "Beer",
    price: 250,
    category: "drink",
    type: "beer",
    popularity: 5,
  },
  {
    id: nanoid(),
    name: "Whiskey",
    price: 300,
    category: "drink",
    type: "whiskey",
    popularity: 4,
  },
  {
    id: nanoid(),
    name: "Vodka",
    price: 250,
    category: "drink",
    type: "vodka",
    popularity: 4,
  },
  {
    id: nanoid(),
    name: "Rum",
    price: 250,
    category: "drink",
    type: "rum",
    popularity: 3,
  },
  {
    id: nanoid(),
    name: "Red Wine",
    price: 400,
    category: "drink",
    type: "wine",
    popularity: 4,
  },
];
