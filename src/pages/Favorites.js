import { useContext} from 'react'

import FavoritesContext from '../store/favoorite-context';
import MeetupList from '../conponents/meetups/MeetupList';

function FavoritesPage(){
    const favoriteCtxt = useContext(FavoritesContext);

    let content;
    if (favoriteCtxt.totalFavorites === 0){
        content = <p>You have no favorites yet </p>
    }else{
        content = <MeetupList meetups={favoriteCtxt.favorites} />
    }
    return <div> 
        <h1>My Fvorites </h1>
        { content }
    </div>;
}

export default FavoritesPage;