import { useNavigate } from 'react-router-dom';
import { useActions } from './useActions';

export function useAuth() {
  const navigate = useNavigate();
  const actions = useActions();
  const checkAuth = () => {
    return localStorage.getItem('token');
  };

  const logout = () => {
    localStorage.removeItem('token');
    actions.clearStore();
    navigate('/');
  };

  const token = checkAuth();

  return {
    token,
    logout,
  };
}
