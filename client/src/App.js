import { Routes, Route } from 'react-router-dom';
// Pages
import AdminPanel from './pages/adminPanel/AdminPanel';
import Home from './pages/home/HomePage';
import Login from './users/login/Login';
import Register from './users/register/Register';
import GameMainPage from './pages/home/GameMainPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bio-clicker' element={<GameMainPage />} />
        <Route path='/admin' element={<AdminPanel />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
