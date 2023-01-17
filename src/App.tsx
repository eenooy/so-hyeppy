import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Intro from './Pages/Intro';
import Login from './Pages/Intro/Login';
import HyeyeonPage from './Pages/hyeyeon';
import SoyoonPage from './Pages/soyoon';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Intro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/hyeyeon" element={<HyeyeonPage />} />
          <Route path="/soyoon" element={<SoyoonPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
