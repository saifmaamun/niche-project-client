import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Signin from './Pages/Signin/Signin';
import AllProducts from './Pages/AllProducts/AllProducts';
import BuyPage from './Pages/Private/BuyPage/BuyPage';
import AuthProvider from './context/AuthProvider';
import DashBorad from './Pages/Private/DashBoard/DashBoard/DashBorad';
import MakeAdmin from './Pages/Private/DashBoard/MakeAdmin/MakeAdmin';
import ManageAllOrders from './Pages/Private/DashBoard/ManageAllOrders/ManageAllOrders';
import ManageAllProducts from './Pages/Private/DashBoard/ManageAllProducts/ManageAllProducts';
import MyOrders from './Pages/Private/DashBoard/MyOrders/MyOrders';
import Review from './Pages/Private/DashBoard/Review/Review';
import AddProduct from './Pages/Private/DashBoard/AddProduct/AddProduct';
import AddReviews from './Pages/Private/DashBoard/AddReviews/AddReviews';
import PrivateOutlet from './PrivateOutlet/PrivateOutlet';

function App() {
  return (
    <div className="App">
      <AuthProvider>


        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signin" element={<Signin />} />
            <Route path="products" element={<AllProducts />} />
            <Route path="/" element={<PrivateOutlet/>} >
              <Route path="products/:id" element={<BuyPage />} />
              <Route path="dashboard" element={<DashBorad />} >
                <Route path="addproducts" element={<AddProduct />} />
                <Route path="makeadmin" element={<MakeAdmin />} />
                <Route path="manageallorders" element={<ManageAllOrders />} />
                <Route path="manageallproducts" element={<ManageAllProducts />} />
                <Route path="myorders" element={<MyOrders />} />
                <Route path="review" element={<Review />} />
                <Route path="addreview" element={<AddReviews />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
