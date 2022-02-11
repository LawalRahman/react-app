import { Route, Routes } from 'react-router-dom';

import Layout from './conponents/layout/Layout';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetups';
import FavoritesPage from './pages/Favorites';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<AllMeetupsPage/>}/>
        <Route path='new-meet-up' element={<NewMeetupsPage/>}/>
        <Route path='favorites' element={<FavoritesPage/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
