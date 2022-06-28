
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/main/Navbar';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HompePage';
import ShoppingPage from './pages/ShoppingPage';
import './App.css';
import CartList from './components/Cart/CartList';
import ProductDetials from './components/Products/ProductDetails';
import CartPage from './pages/CartPage';


function App() {


  return (
    <>
      <Navbar />
      <div className="App">
        <Container className='mb-4 bg-light' id='app' >
          <CartPage />
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/home' element={<HomePage />}></Route>
            <Route path='/shopping' element={<ShoppingPage />}>
            </Route>
            <Route path='shopping/:id' element={<ProductDetials />}>  </Route>
            <Route path='/about' element={<AboutPage />}></Route>
            <Route path='/cart' element={<CartList />}></Route>
          </Routes>
        </Container>
      </div>
    </>
  )
}

export default App
