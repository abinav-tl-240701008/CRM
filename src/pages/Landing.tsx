import { useEffect } from 'react';
import { useAuth } from '../store/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const { session, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }

    if (session) {
      navigate('/', { replace: true });
      return;
    }

    window.location.replace('/landing/index.html');
  }, [loading, session, navigate]);

  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF' }} />
  );
}
