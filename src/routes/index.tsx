import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Intro from './Intro';
import Login from './Intro/Login';
const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Layout>
  );
};

export default App;
