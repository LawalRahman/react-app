import { useContext } from 'react';

import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favoorite-context';

function MainNavigation(){
    const favoriteCtxt = useContext(FavoritesContext)
    return (
        <>
            <header className={classes.header}>
                <div className={classes.logo}>React Meetups</div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Meetups</Link>
                        </li>
                        <li>
                            <Link to='new-meet-up'>Add New</Link>
                        </li>
                        <li>
                            <Link to='favorites'>
                                Favorites <span className={ classes.badge }>
                                {favoriteCtxt.totalFavorites}
                                    </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default MainNavigation;