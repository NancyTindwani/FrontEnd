// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Product from './pages/IndividualProduct';
import Cartcard from './components/Cartcard';
import Reviewsecond from './components/Reviewsecond';
import Checkout from './components/Checkout';
import Checkout2 from './components/Checkout2';
import SignInOutContainer from './container/Index'
import Creditcard from './components/creditcard'
import Review from './components/Review';
import Reviewpaymentbycard from './components/Reviewpaymentbycard'
function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<SignInOutContainer />} />
        {/* <Route path='/category' element={<Category />} /> */}
        <Route path='category/:id' element={<Category />} />
        <Route path='product' element={<Product />} />
        <Route path='cart' element={<Cartcard/>}/>
        <Route path='review' element={<Reviewsecond/>}/>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='checkout2' element={<Checkout2/>}/>
        <Route path='creditcard' element={<Creditcard/>}/>
        <Route path='review2' element={<Reviewpaymentbycard/>}/>
      </Routes>
    </div>
  );
}

export default App;
