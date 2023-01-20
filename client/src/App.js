import { Routes, Route, Navigate } from 'react-router-dom';
import Game from './components/game/Game';
import './app.css';
import AdminPanel from './pages/adminPanel/AdminPanel';
import Login from './users/login/Login'
import Register from './users/register/Register'
import Account from './users/account/Account'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Game />} />
        <Route path='/admin' element={<AdminPanel />} />
        <Route path='/account' element={<Account />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        {/* <Route element={<AuthenticateUser />}>
            <Route path='/welcome' element={<WelcomePage />} />

          </Route> */}
      </Routes>
    </>
  );
}

function isLoggedIn() {
  const loadedToken = localStorage.getItem('token');
  return !(loadedToken === '');
}

export default App;
