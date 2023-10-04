import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';
import CartPage from './components/CartPage';
import SuccessPage from './components/SuccessPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Body />}/>
        <Route path='/restaurantmenu/:id' element={<RestaurantMenu />}/>
        <Route path='/cart' element={<CartPage />}/>
        <Route path='/success' element={<SuccessPage />}/>
      </Routes>
    </div>
  );
}

export default App;
