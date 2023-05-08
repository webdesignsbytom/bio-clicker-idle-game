import { Routes, Route } from 'react-router-dom';
// Pages
import AdminPanel from './pages/adminPanel/AdminPanel';
import GameMainPage from './pages/game/GameMainPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<GameMainPage />} />
        <Route path='/home' element={<GameMainPage />} />
        <Route path='/admin' element={<AdminPanel />} />
      </Routes>
    </>
  );
}

export default App;
