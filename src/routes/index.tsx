import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Login from './Login';
const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Layout>
  );
};

export default App;
