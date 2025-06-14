import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';
import LoginForm from './components/LoginForm';
import PlantDetail from './pages/PlantDetail';
import PetFriendlyPage from './pages/PetFriendlyPage'; // ✅ Import

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsAdmin(localStorage.getItem('isAdmin') === 'true');
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/plant/:id" element={<PlantDetail />} />
        <Route path="/admin" element={isAdmin ? <AdminPanel /> : <LoginForm setIsAdmin={setIsAdmin} />} />
        <Route path="/pet-friendly" element={<PetFriendlyPage />} /> {/* ✅ Added */}
      </Routes>
    </Router>
  );
}

export default App;
