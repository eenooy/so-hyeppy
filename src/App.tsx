import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Intro from './Pages/Intro';
import Login from './Pages/Intro/Login';
import HyeyeonPage from './Pages/hyeyeon';
import HyeyeonLogin from './Pages/hyeyeon/Login';
import SoyoonPage from './Pages/soyoon';
import SoyoonLogin from './Pages/soyoon/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Intro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/hyeyeon" element={<HyeyeonPage />} />
          <Route path="/hyeyeon/login" element={<HyeyeonLogin />} />
          <Route path="/soyoon" element={<SoyoonPage />} />
          <Route path="/soyoon/login" element={<SoyoonLogin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
