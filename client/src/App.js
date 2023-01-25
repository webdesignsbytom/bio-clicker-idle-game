import { Routes, Route } from 'react-router-dom';
import AdminPanel from './pages/adminPanel/AdminPanel';
import Home from './pages/home/Home';
import Login from './users/login/Login'
import Register from './users/register/Register'
import Account from './users/account/Account'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<AdminPanel />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </>
  );
}

export default App;
