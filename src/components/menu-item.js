import { Link } from "react-router-dom";

export const MenuItem = (props) => {
    const { itemName, itemURL, iconClass, marginBelow } = props;
    const styleValue = { marginBottom: marginBelow ? 25 : 0 }
    return (
        <li style={ styleValue }>
            <Link to={itemURL}>
                <i className={iconClass}></i>
                {itemName}
            </Link>
        </li>
    );
}
