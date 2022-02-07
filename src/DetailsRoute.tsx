import menu from './models/MenuItems'
import { useParams} from 'react-router-dom'
import { Item } from './models/ItemsFace';
import { Header } from './Header';


export function getItem(id:any) :any {
    return menu.find(
      item => item.id === id
    );
  }

  

export function DetailsRoute() {

    let params = useParams();
    let item = getItem(params.id)


    return(
        <div key={item.id}>
            <p>Name: {item.name}</p>
            <p>Calories: {item.calories}</p>
            <p>Description: {item.description}</p>
            <p>Vegetarian: {item.vegetarian}</p>
            <p>Price: ${item.price}</p>
        </div>
    );
}