import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = () => {
    if (email === '' || password === '') {
      setError('Please fill in both fields');
    } else {
      setError(null);
      alert('Login successful!');
    }
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
            type="password"
            placeholder="Password"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span style={styles.eyeIcon}>👁️</span>
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
        <a href="#" style={styles.logoLink}>[LOGO]</a>
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
    backgroundColor: '#007bff',
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
    gap: '30px', // Adjust this value to control spacing between the logo and nav links
  },
  logoLink: {
    textDecoration: 'none',
    color: '#5a00ff',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#5a00ff',
    fontWeight: '500',
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
    backgroundColor: '#007bff',
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
