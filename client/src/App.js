import { Routes, Route } from 'react-router-dom';
import Game from './components/game/Game';
import AdminPanel from './pages/adminPanel/AdminPanel';
import Home from './pages/home/Home';

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game' element={<Game />} />
        <Route path='/admin' element={<AdminPanel />} />
      </Routes>
    </>
  );
}

export default App;
