import { Link, Outlet } from "react-router-dom";
import { Item } from "./models/ItemsFace";

export function BasicItem({name, price, id}:Item) {

    return(
        <div className="BasicItem">
            <p>{name}</p>
            <p>${price}</p>
            <Link to={`/details/${id}`} key={id}>Details</Link>
        </div>
    );
}