import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LoadingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/chat');
    }, 2000); // Simulate 2s loading
  }, [navigate]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Processing...</h2>
      <p>Please wait...</p>
    </div>
  );
}

export default LoadingPage;
