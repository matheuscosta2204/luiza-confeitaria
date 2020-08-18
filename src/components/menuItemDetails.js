import React from 'react';

import stars from '../media/fire.svg';

const MenuItemDetails = ({ item, order }) => {

    const detailsContainerClass = [order === "left" ? "mi-right-details-container" : "mi-left-details-container"];
    return (
        <div className={detailsContainerClass.join(" ")}>
            <h2 className="mid-title">{item.title}</h2>
            <img src={stars} alt={stars} className="cake-stars" />
            <div className="cake-box" style={{ backgroundColor: item.description["cover"].bgColor}}>
                <span 
                    className="cake-item" 
                    style={{ color: item.description["cover"].color, backgroundColor: item.description["cover"].bgColor}}>
                        {item.description["cover"].text}
                </span>
                <span 
                    className="cake-item" 
                    style={{ color: item.description["dough"].color, backgroundColor: item.description["dough"].bgColor}}>
                        {item.description["dough"].text}
                </span>
                <span 
                    className="cake-item" 
                    style={{ color: item.description["filling1"].color, backgroundColor: item.description["filling1"].bgColor}}>
                        {item.description["filling1"].text}
                </span>
                <span 
                    className="cake-item" 
                    style={{ color: item.description["dough"].color, backgroundColor: item.description["dough"].bgColor}}>
                        {item.description["dough"].text}
                </span>
                <span 
                    className="cake-item" 
                    style={{ color: item.description["filling2"].color, backgroundColor: item.description["filling2"].bgColor}}>
                        {item.description["filling2"].text}
                </span>
                <span 
                    className="cake-item" 
                    style={{ color: item.description["dough"].color, backgroundColor: item.description["dough"].bgColor}}>
                        {item.description["dough"].text}
                </span>
            </div>
        </div>
    )
}

export default MenuItemDetails;