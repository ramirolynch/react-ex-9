import { useLayoutEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import menu from "./models/MenuItems";


export function SearchRoute() {

    let [searchParams, setSearchParams] = useSearchParams();

    function handleSubmit(event:any) {
        event.preventDefault();
        // The serialize function here would be responsible for
        // creating an object of { key: value } pairs from the
        // fields in the form that make up the query.
        let formData = new FormData(event.currentTarget)
        let priceFilter = formData.get('price') as string;
        let caloriesFilter = formData.get('calories') as string;
        setSearchParams({price:priceFilter, calories:caloriesFilter})
      }

      function filterMenu() {

        let cal  = searchParams.get('calories') || ''
        let price = searchParams.get('price') || ''

        return menu.filter(item => item.price <= parseInt(price) && item.calories <= parseInt(cal) )
     }


    const [priceFilter, setPriceFilter] = useState('')
    const [calFilter, setCalFilter]= useState('')

 
    return(
        <div>
            <h2>Filter results by filling out one or more fields</h2>

            <form onSubmit={handleSubmit}>
      
                <input value={priceFilter} onChange={(e)=>{ let price = e.target.value; setPriceFilter(price)}}  type="range" id="price" name="price" min="0" max="15"/>
                <label htmlFor="price">Max Price (Max Price ($15)</label>

                <input value={calFilter} onChange={(e)=>{ let calories=e.target.value; setCalFilter(calories)}} type="range" id="calories" name="calories" min="0" max="1500"/>
                
                <label htmlFor="calories">Max Calories 1500</label>

                <button type='submit'>filter</button>
            
            </form>

                { filterMenu().map( item=>  <ul><li>{item.name}</li><li>{item.price}</li></ul>) }

        </div>
    );
}


