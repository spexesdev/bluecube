import { Menu } from "../data/menu";
import { MenuHeader } from "./menu-header";
import { MenuItem } from "./menu-item";

const MenuBar = () => {

    const menuArray = Menu.map((item, index) => {
        return (
            <MenuItem
                key={index}
                itemName={item.name}
                itemURL={item.url}
                iconClass={item.icon}
                marginBelow={item.marginBelow}
            />
        )
    })

    return (
        <div className="navigation">
            <ul>
                <MenuHeader />
                {menuArray}
            </ul>
        </div>
    );
}

export default MenuBar;
