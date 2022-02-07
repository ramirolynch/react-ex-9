import { Link } from "react-router-dom";
import { MenuRoute } from "./MenuRoute";

export function Header (){


    return(
        <header>
            <Link to={"/"}>Menu</Link>
            <Link to={'/search'}>Search</Link>
        </header>
    );

}