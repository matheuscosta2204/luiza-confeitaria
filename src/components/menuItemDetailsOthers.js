import React from 'react';

const MenuItemDetails = ({ item, order }) => {

    const detailsContainerClass = [order === "left" ? "mi-right-details-container" : "mi-left-details-container"];
    return (
        <div className={detailsContainerClass.join(" ")}>
            <h2 className="mid-title">{item.title}</h2>
            <img src={item.image} alt="bolos" className="others-img" />
        </div>
    )
}

export default MenuItemDetails;