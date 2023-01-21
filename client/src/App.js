import { Routes, Route, Navigate } from 'react-router-dom';
import Game from './components/game/Game';
import './app.css';
import AdminPanel from './pages/adminPanel/AdminPanel';

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Game />} />
        <Route path='/admin' element={<AdminPanel />} />

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
