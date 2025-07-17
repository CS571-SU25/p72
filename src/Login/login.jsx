import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';


import './login.css';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    if(isLogin) {
      const user = users.find(u => u.username === username && u.password === password);
      if(user) {
        login(user.username);
        navigate('/home');
      } else {
        setError('Incorrect user name or password');
      }
    } else {
      if(password !== confirmPassword) {
        setError('Inconsistency between two password entries');
        return;
      }
      if(users.some(u => u.username === username)) {
        setError('Username already exists');
        return;
      }
      const newUser = { username, password };
      localStorage.setItem('users', JSON.stringify([...users, newUser]));
      setError('Successful registration, please log in');
      setIsLogin(true);
    }
  };

  return (
    <div className="login-container">
      <h2>{isLogin ? 'log in' : 'sign up'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {!isLogin && (
          <div className="form-group">
            <label>Confirm password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        )}
        {error && <div className="error-message">{error}</div>}
        <button type="submit">{isLogin ? 'log in' : 'sign up'}</button>
      </form>
      <button 
        className="toggle-mode" 
        onClick={() => {
          setIsLogin(!isLogin);
          setError('');
        }}
      >
        {isLogin ? 'Switch to registration' : 'Switch to Login'}
      </button>
    </div>
  );
}

export default Login;