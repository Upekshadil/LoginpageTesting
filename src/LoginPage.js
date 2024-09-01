import React, { useState } from 'react';
import logo from './Logo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false); 

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    // Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(String(password));
  };

  const handleLogin = () => {
    if (email === '' || password === '') {
      setError('Please fill in both fields');
    } else if (!validateEmail(email)) {
      setError('Please enter a valid email address');
    } else if (!validatePassword(password)) {
      setError('Incorrect password');
    } else {
      setError(null);
      alert('Login successful!');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.loginBox}>
        <h2 style={styles.title}>Account Log In</h2>
        {error && <p style={styles.error}>{error}</p>}
        <input
          type="email"
          placeholder="Email"
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div style={styles.passwordContainer}>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            style={styles.eyeIcon}
            onClick={togglePasswordVisibility}
          />
        </div>
        <div style={styles.optionsContainer}>
          <label style={styles.rememberMe}>
            <input type="checkbox" />
            Remember Me
          </label>
          <a href="#" style={styles.forgotPassword}>Forgot Password?</a>
        </div>
        <button style={styles.loginButton} onClick={handleLogin}>
          LOGIN
        </button>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div style={styles.header}>
      <div style={styles.leftSection}>
        <a href="#" style={styles.logoLink}>
          <img src={logo} alt="Logo" style={styles.logo} />
        </a>
        <div style={styles.nav}>
          <a href="#" style={styles.navLink}>Home</a>
          <a href="#" style={styles.navLink}>About Us</a>
          <a href="#" style={styles.navLink}>Use Cases</a>
          <a href="#" style={styles.navLink}>Statistics</a>
          <a href="#" style={styles.navLink}>Upload</a>
        </div>
      </div>
      <div style={styles.rightOptions}>
        <button style={styles.languageButton}>Language</button>
        <button style={styles.signUpButton}>Sign Up</button>
        <button style={styles.loginButtonHeader}>Login</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f4f4f4',
  },
  loginBox: {
    width: '300px',
    padding: '30px',
    backgroundColor: '#ffffff',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
    textAlign: 'center',
  },
  title: {
    marginBottom: '20px',
    fontSize: '24px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #cccccc',
  },
  passwordContainer: {
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    userSelect: 'none',
  },
  optionsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  rememberMe: {
    display: 'flex',
    alignItems: 'center',
  },
  forgotPassword: {
    color: '#007bff',
    textDecoration: 'none',
  },
  loginButton: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#2ECC71',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '10px 20px',
    backgroundColor: '#f8f8f8',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    position: 'fixed',
    top: 0,
    zIndex: 1000,
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
  },
  logoLink: {
    textDecoration: 'none',
    color: '#5a00ff',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  logo: {
    width: '70px',
    height: 'auto',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  navLink: {
    textDecoration: 'none',
    fontWeight: '500',
    color: '#2ECC71',
  },
  rightOptions: {
    display: 'flex',
    gap: '10px',
  },
  languageButton: {
    backgroundColor: 'transparent',
    border: '1px solid #cccccc',
    padding: '5px 10px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  signUpButton: {
    backgroundColor: '#2ECC71',
    color: '#ffffff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  loginButtonHeader: {
    backgroundColor: '#ffffff',
    color: '#007bff',
    border: '1px solid #007bff',
    padding: '5px 10px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginBottom: '15px',
  },
};

export default LoginPage;
