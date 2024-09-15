import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/login/login';
import Chat from './pages/chat/chat.jsx';
import ProfileUpdate from './pages/ProfileUpdate/ProfileUpdate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase.js';
const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) =>{
      if (user) {
        navigate('/chat')
        console.log(user)
      }
      else {
        navigate('/');
      }
   })
 },[])
  return (
    <>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/profile' element={<ProfileUpdate />} />
      </Routes>
    </>
  );
}

export default App;
