import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Intro from './Pages/Intro';
import Login from './Pages/Intro/Login';
import HyeyeonPage from './Pages/Hyeyeon';
import HyeyeonLogin from './Pages/Hyeyeon/Login';
import SoyoonPage from './Pages/Soyoon';
import SoyoonLogin from './Pages/Soyoon/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Intro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Hyeyeon" element={<HyeyeonPage />} />
          <Route path="/Hyeyeon/login" element={<HyeyeonLogin />} />
          <Route path="/Soyoon" element={<SoyoonPage />} />
          <Route path="/Soyoon/login" element={<SoyoonLogin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
