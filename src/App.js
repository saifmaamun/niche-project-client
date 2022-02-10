import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Signin from './Pages/Signin/Signin';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>

      <BrowserRouter>
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
