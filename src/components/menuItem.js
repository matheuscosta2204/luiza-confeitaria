import React, { useState, useEffect } from 'react';

import MenuItemDetails from './menuItemDetails';
import MenuItemDetailsOthers from './menuItemDetailsOthers';

const MenuItem = ({ item, order, active, others }) => {

    useEffect(() => {
        if(active) {
            setHovered(true);
        }
    }, [active])

    const [hovered, setHovered] = useState(false);

    const _renderDetails = () => {
        if(hovered) {
            if(!others) {
                return (
                    <MenuItemDetails order={order} item={item} />
                )   
            } else {
                return (
                    <MenuItemDetailsOthers order={order} item={item} />
                )
            }
        } else {
            return null
        }
    }

    let menuItemClass = [order === "left" ? "menu-item-left" : "menu-item-right", hovered ? "item-active increase-right": "", ];
    let menuItemBoxClass = [order === "left" ? "menu-item-box-left" : "menu-item-box-right"];
    return (
        <div className={menuItemBoxClass.join(" ")}
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}>
            <div className={menuItemClass.join(" ")}>
                {item.title}
            </div>
            {_renderDetails()}
        </div>
    )
}

export default MenuItem;