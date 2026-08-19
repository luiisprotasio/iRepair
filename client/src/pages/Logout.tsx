import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';

export function Logout() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function handleLogout() {
      setLoading(true);
      try {
        await logout();
      } catch (error) {
        console.error('Erro ao fazer logout:', error);
      } finally {
        setLoading(false);
        navigate('/login', { replace: true });
      }
    }

    handleLogout();
  }, [navigate]);

  return (
    <div className="flex justify-center items-center bg-radial from-[#133036] to-[#0a181b] min-h-screen">
      {loading ? (
        <div className="text-white text-xl animate-pulse">Saindo...</div>
      ) : (
        <div className="text-white text-xl">Logout realizado com sucesso!</div>
      )}
    </div>
  );
  
}
