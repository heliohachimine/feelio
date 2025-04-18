import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header";


export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <AuthProvider>
      <Router>
        <div className={darkMode ? "dark" : ""}>
          <Header onClickDarkMode={setDarkMode} darkMode={darkMode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route
              path="home"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}
