import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; 
import '../CSS/Login.css';

const firebaseConfig = {
  apiKey: "AIzaSyBa-AtFuPM-bhEKsXNdWkUomro4q5ygVhM",
  authDomain: "siddhesh-travels.firebaseapp.com",
  projectId: "siddhesh-travels",
  storageBucket: "siddhesh-travels.appspot.com",
  messagingSenderId: "904772354648",
  appId: "1:904772354648:web:ef0b35c57115f51aee802d",
  measurementId: "G-5T38T4E404"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); 

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigate('/Dashboard');
      }
    });
    return unsubscribe;
  }, [auth, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login Form</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <div className="register-link">
        Don't have an account? <a href="/Register">Register</a>
      </div>
    </div>
  );
};

export default LoginForm;