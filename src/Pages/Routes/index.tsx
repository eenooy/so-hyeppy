import { Routes, Route } from 'react-router-dom';
import Layout from '../../Components/Common/Layout';
import Intro from './Intro';
import Login from './Intro/Login';
import HyeyeonPage from './hyeyeon';
import SoyoonPage from './soyoon';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hyeyeon" element={<HyeyeonPage />} />
        <Route path="/soyoon" element={<SoyoonPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
