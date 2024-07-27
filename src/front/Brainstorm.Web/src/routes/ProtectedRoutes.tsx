import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';
import { useAuth } from '../context/AuthContext';
import Cookies from 'js-cookie';

export function ProtectedRoute({ children }: { children: ReactNode }) {
  const { accessToken } = useAuth();

  const token = Cookies.get('token');

  if (!accessToken && !token) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}
