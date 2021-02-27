import React, { useState } from 'react';

import MenuItemGroup from './menuItemGroup';
import chocolateIcon from '../media/chocolate.svg';
import fruitsIcon from '../media/fruits.svg';

import chocolateItems from '../data/cardapioChocolate.json';
import fruitItems from '../data/cardapioFrutas.json';

const othersItems = [
    {
        title: "Bolovo",
        description: "Bolo de qualquer sabor acima, coberto com casca de ovo de pascoa",
        image: "/assets/images/bolovo.jpg"
    },
    {
        title: "Merengue",
        description: "Uma camada de suspiro, uma camada de creme, uma camada de chantily com morangos.",
        image: "/assets/images/merengue.jpg"
    },
    {
        title: "Bolo no pote",
        description: "Bolo de qualquer sabor acima, em um pote de 10cm de altura",
        image: "/assets/images/bolopote.jpg"
    }
]

const Menu = ({ reference }) => {
    const [itemActive, setItemActive] = useState(false);
    
    const renderMenuDetailsBackground = () => {
        if(itemActive) {
            return <div className="mid-background" />;
        } else {
            return null;
        }
    }

    return (
        <div className="menu-container" ref={reference} >
            {renderMenuDetailsBackground()}
            <MenuItemGroup order="left" items={chocolateItems} type="Chocolate" icon={chocolateIcon} setItemActive={setItemActive} />
            <MenuItemGroup order="right" items={fruitItems} type="Frutas" icon={fruitsIcon} setItemActive={setItemActive} />
            <MenuItemGroup order="left" items={othersItems} type="Diversos" icon={chocolateIcon} others setItemActive={setItemActive} />
        </div>
    )
}

export default Menu;