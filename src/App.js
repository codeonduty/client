// App.js

// Libraries:

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

// Modules:

// Components
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';

// Pages
import Home from './page/Home/Home';
import Catalogue from './page/Catalogue/Catalogue';
import Login from './page/Login/Login';
import Register from './page/Register/Register';
import ShoppingList from './page/List/Shopping/ShoppingList';
import WishList from './page/List/Wish/WishList';
import Item from './page/Item/Item';

// Redux actions
import { setShopper } from './store/slice/shopper/shopper';
import { setShoppingList } from './store/slice/list/shopping/shoppingList';
import { setWishList } from './store/slice/list/wish/wishList';

// Code:

// App component
const App = () => {
  // Instantiate dispatch handler;
  const dispatch = useDispatch();

  // Find shopper that's logged in local storage
  const shopper = JSON.parse(localStorage.getItem('shopper'));

  // Find shopping list in local storage
  const shoppingList = JSON.parse(localStorage.getItem('shoppingList'));

  // Find wishlist in local storage
  const wishList = JSON.parse(localStorage.getItem('wishList'));

  useEffect(() => {
    if (shopper) dispatch(setShopper(shopper));
    if (shoppingList) dispatch(setShoppingList(shoppingList));
    if (wishList) dispatch(setWishList(wishList));
  }, []);

  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/item/catalogue' element={<Catalogue />} />
            <Route path='/item/:id' element={<Item />} />
            <Route path='/shopper/login' element={<Login />} />
            <Route path='/shopper/register' element={<Register />} />
            <Route path='/shopper/list/shopping' element={<ShoppingList />} />
            <Route path='/shopper/list/wish' element={<WishList />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

// App.js ends here
