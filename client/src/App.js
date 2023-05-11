import { Routes, Route } from 'react-router-dom';
// Pages
import GameMainPage from './pages/game/GameMainPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<GameMainPage />} />
      </Routes>
    </>
  );
}

export default App;
