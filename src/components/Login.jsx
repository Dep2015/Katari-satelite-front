import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaChecked && username && password) {
      // Simple validation - in a real app, you'd handle authentication properly
      navigate('/dashboard');
    } else {
      alert('Por favor complete todos los campos y verifique que no es un robot');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">
          <div className="triangle"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="captcha-container">
            <div className="captcha-box">
              <input
                type="checkbox"
                checked={captchaChecked}
                onChange={() => setCaptchaChecked(!captchaChecked)}
              />
              <span>No soy un robot</span>
              <div className="recaptcha-logo">reCAPTCHA</div>
            </div>
          </div>
          <button type="submit" className="login-button">Aceptar</button>
        </form>
      </div>
    </div>
  );
};
export default Login;