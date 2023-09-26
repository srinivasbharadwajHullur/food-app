import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Body />}/>
        <Route path='/restaurantmenu/:id' element={<RestaurantMenu />}/>
      </Routes>
    </div>
  );
}

export default App;
