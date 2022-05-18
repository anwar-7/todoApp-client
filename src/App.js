import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
// I don't no this is working here or not
import 'react-toastify/dist/ReactToastify.css';
import Header from './Pages/Shared/Header/Header';

import MyTodos from './Pages/MyTodos/MyTodos';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';

import Home from './Pages/Home/Home/Home';

import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';

// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            // <RequireAuth>
            <Home />
            // </RequireAuth>
          }
        />
        <Route
          path="/home"
          element={
            // <RequireAuth>
            <Home />
            // </RequireAuth>
          }
        />
        <Route
          path="/myTodos"
          element={
            <RequireAuth>
              <MyTodos />
            </RequireAuth>
          }
        />
        {/* after dropdown menu */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {/* toast container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
