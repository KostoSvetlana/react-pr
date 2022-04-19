import React, { useState } from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";

import "./App.css";
import { ChatList } from "./components/ChatList/ChatList";
import { Chat } from "./screens/Chat/Chat";
import { ThemeContext } from "./utils/ThemeContext";
import { Profile } from "./screens/Profile/Profile";
import { Articles } from "./screens/Articles/Articles";
import { Home } from "./screens/Home/Home";





function App(){
  const [theme, setTheme] = useState("dark");

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
      <Route path='/' element={<Home/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path="/articles" element={<Articles />} />
      <Route path="/chat" element={<ChatList />}>
      <Route path=":id" element={<Chat />} 
      /> 
      </Route>
      <Route path='*' element={<h4>404</h4>} />
    </Routes>
    </BrowserRouter>
    </ThemeContext.Provider>

  );
}



export default App;