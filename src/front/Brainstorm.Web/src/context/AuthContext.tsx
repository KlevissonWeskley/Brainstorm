import { ReactNode, createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { IStudentData } from '../interfaces/IStudentData';

interface AuthContextType {
  accessToken: string | null
  username: string | null
  signUp: (data: IStudentData) => Promise<void>
  login: (data: IStudentData) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const [username, setUsername] = useState<string | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const token = Cookies.get('token')
    const storedUsername = Cookies.get('username')

    if (token) setAccessToken(token);
    if (storedUsername) setUsername(storedUsername)
  }, [])

  async function signUp({ username, password }: IStudentData) {
    try {
      await api.post('/students', { username, password })
      toast.success('Conta criada! Você pode fazer login para acessar.')
    } catch (err: any) {
      console.log(err)
      toast.error(`Erro ao criar a conta: ${err}`)
    }
  }

  async function login({ username, password }: IStudentData) {
    try {
      const reply = await api.post('/students/login', { username, password })

      const token  = reply.data

      Cookies.set('token', token, { expires: 7 })
      Cookies.set('username', username, { expires: 7 })

      setAccessToken(token)
      setUsername(username)

      navigate('/feed')

      toast.success(`Bem-vindo de volta! ${username}.`)
    } catch (err: any) {
      console.log(err)
      toast.error(`Erro ao fazer login: ${err.response.data}`)
    }
  }

  function logout() {
    setAccessToken(null)
    setUsername(null)
    Cookies.remove('token')
    Cookies.remove('username')
    navigate('/')
    window.location.reload()
  }

  return (
    <AuthContext.Provider value={{ accessToken, username, signUp, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext)
