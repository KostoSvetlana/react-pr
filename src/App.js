import React, { useState,  useEffect } from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";

import "./App.css";
import { ChatList } from "./components/ChatList/ChatList";
import { Chat } from "./screens/Chat/Chat";
import { ThemeContext } from "./utils/ThemeContext";
import { Profile } from "./screens/Profile/Profile";
import { Articles } from "./screens/Articles/Articles";
import { Home } from "./screens/Home/Home";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute/PublicRoute";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "./services/firebase";



function App(){
  const [theme, setTheme] = useState("dark");


  const [authed, setAuthed] = useState(false);

  const handleLogin = () => {
    setAuthed(true);
  };
  const handleLogout = () => {
    setAuthed(false);
  };

   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        handleLogin();
      } else {
        handleLogout();
      }
    });

    return unsubscribe;
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  

  return(
  
      <ThemeContext.Provider value={{ theme, changeTheme: toggleTheme }}>
    <BrowserRouter>
    <ul>
      <li> 
        <NavLink
            to="/"
            style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
        > Home
        </NavLink>
      </li>
      <li> <NavLink
            style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
            to="/chat"
          >
            Chat
          </NavLink>
        </li>
        <li> <NavLink
            style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
            to="/profile"
          >
            Profile
          </NavLink>
        </li>
        <li><NavLink
              style={({ isActive }) => ({ color: isActive ? "green" : "blue", })}
              to="/articles"
            >
              Articles
            </NavLink>
          </li>
    </ul>
    <Routes>
          <Route path="/" element={<PublicRoute authed={authed} />}>
            <Route path="" element={<Home onAuth={handleLogin} />} />
            <Route
              path="signup"
              element={<Home onAuth={handleLogin} isSignUp />}
            />
          </Route>

          <Route path="/profile" element={<PrivateRoute authed={authed} />}>
            <Route path="" element={<Profile onLogout={handleLogout} />} />
          </Route>

          <Route path="/articles" element={<Articles />} />
          <Route path="/chat" element={<ChatList />}>
            <Route path=":id" element={<Chat />} />
          </Route>
          <Route path="*" element={<h4>404</h4>} />
        </Routes>
    </BrowserRouter>
    </ThemeContext.Provider>

  );
}



export default App;