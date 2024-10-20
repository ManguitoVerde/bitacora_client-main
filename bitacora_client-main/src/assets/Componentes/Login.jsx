import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-image">
        <img src="./IMG/Botanicakeli.png" alt="Login Image" />
      </div>
      <div className="login-form">
        <h2>Bienvenidos!</h2>
        <form>
          <div className="input-group">
            <label htmlFor="username"><i className="fas fa-user"></i></label>
            <input type="text" id="username" placeholder="@username" required />
          </div>
          <div className="input-group">
            <label htmlFor="password"><i className="fas fa-lock"></i></label>
            <input type="password" id="password" placeholder="Contraseña" required />
          </div>
          <a href="#" className="forgot-password">Olvidar contraseña?</a>
          <div className="button-container">
            <button type="button" className="login-btn" onClick={() => window.location.href = './InicioBitacora.html'}>Ingresar</button>
            <button type="button" className="login-btn" onClick={() => window.location.href = './FormularioRegistro.html'}>Registrarse</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
