import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Intro from './Pages/Intro';
import Login from './Pages/Intro/Login';
import HyeyeonPage from './Pages/Hyeyeon';
import HyeyeonLogin from './Pages/Hyeyeon/Login';
import Main from './Pages/Main';
import './Styles/tailwind.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Intro />} />
          <Route path="/Hyeyeon" element={<HyeyeonPage />} />
          <Route path="/Hyeyeon/login" element={<HyeyeonLogin />} />
          <Route path="/main" element={<Main />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/Hyeyeon/login" element={<HyeyeonLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
