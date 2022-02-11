import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Signin from './Pages/Signin/Signin';
import AuthProvider from './context/AuthProvider';
import Header from './Pages/Shared/Header/Header';
import AllProducts from './Pages/AllProducts/AllProducts';
import BuyPage from './Pages/Private/BuyPage/BuyPage';

function App() {
  return (
    <div className="App">
      <AuthProvider>

        <BrowserRouter>
          <Header/>
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="signin" element={<Signin />} />
              <Route path="products" element={<AllProducts/>} />
            <Route path="products/:id" element={<BuyPage/>} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
