import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthPage from '../AuthPage/AuthPage';
import AuthPageTwo from '../AuthPage/AuthPageTwo';
import HomePage from '../HomePage/HomePage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser())
  return (
    <div className="App">
      {
        user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/orders" element={<OrderHistoryPage />} />
            </Routes>
          </>
          :
          <Routes>
            <Route path="/" element={<AuthPage setUser={setUser} />} />
            <Route path="/signup" element={<AuthPageTwo setUser={setUser} />} />
          </Routes>
      }
    </div>
  );
}

