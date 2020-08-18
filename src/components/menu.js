import React from 'react';

import MenuItemGroup from './menuItemGroup';
import chocolateIcon from '../media/chocolate.svg';
import fruitsIcon from '../media/fruits.svg';

import chocolateItems from '../data/cardapioChocolate.json';
import fruitItems from '../data/cardapioFrutas.json';

const othersItems = [
    {
        title: "Bolovo",
        description: "Bolo de qualquer sabor acima, coberto com casca de ovo de pascoa",
        image: "https://lh3.google.com/u/0/d/1C-7dZ44zCmSJ3MPJ-YTec8QeYqqOcYaK=w1920-h969-iv1"
    },
    {
        title: "Merengue",
        description: "Uma camada de suspiro, uma camada de creme, uma camada de chantily com morangos.",
        image: "https://lh3.google.com/u/0/d/1i8-eV2lMlBwXHPcdiUV1ba5x9GPRggR9=w1289-h969-iv1"
    },
    {
        title: "Bolo no pote",
        description: "Bolo de qualquer sabor acima, em um pote de 10cm de altura",
        image: "https://lh3.google.com/u/0/d/1_eyUlNjpjVavO8wvqWNXVAiMAJ-0TqHO=w1289-h969-iv1"
    }
]

const Menu = () => {
    return (
        <div className="menu-container">
            <MenuItemGroup order="left" items={chocolateItems} type="Chocolate" icon={chocolateIcon} active />
            <MenuItemGroup order="right" items={fruitItems} type="Frutas" icon={fruitsIcon} />
            <MenuItemGroup order="left" items={othersItems} type="Diversos" icon={chocolateIcon} others />
        </div>
    )
}

export default Menu;