import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { BasicItem } from './BasicItem';
import { Header } from './Header';
import menu from './models/MenuItems'

export function MenuRoute() {


    
    return(
        <div>
           
           

            {menu.map((elem, i)=><BasicItem key={i} name={elem.name} price={elem.price} id={elem.id}></BasicItem>

        
            )}

            <Outlet/>
            

        </div>
    );
}
