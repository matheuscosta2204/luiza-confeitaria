import React from 'react';

import MenuItem from './menuItem';

const MenuItemGroup = ({ items, others, type, order, active }) => {
    const orderClass = [order === 'left' ? "order-left" : "order-right"];
    const migHeaderClass = [order === 'left' ? "mig-header-left" : "mig-header-right"];
    return (
        <div className={orderClass.join(" ")}>
            <div className="mig-container">
                <div className={migHeaderClass.join(" ")}>
                    <h2>{type}</h2>
                </div>
                {items.map((item, index) => (
                    <MenuItem item={item} order={order} active={active && index === 0 ? true: false} others={others} />
                ))}
            </div>
        </div>
    )
}

export default MenuItemGroup;