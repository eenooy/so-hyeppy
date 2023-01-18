import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Intro from './Pages/Intro';
import Login from './Pages/Intro/Login';
import HyeyeonPage from './Pages/Hyeyeon';
import SoyoonPage from './Pages/Soyoon';
import SoyoonLogin from './Pages/Soyoon/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Intro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/hyeyeon" element={<HyeyeonPage />} />
          <Route path="/soyoon" element={<SoyoonPage />} />
          <Route path="/soyoon/login" element={<SoyoonLogin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
