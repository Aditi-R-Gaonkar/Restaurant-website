import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      {MenuList.map((category, key) => (
        <div key={key}>
          <h2 className="categoryTitle">{category.category}</h2>
          <div className="menuList">
            {category.items.map((menuItem, itemKey) => (
              <MenuItem
                key={itemKey}
                image={menuItem.image}
                name={menuItem.name}
                price={menuItem.price}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
