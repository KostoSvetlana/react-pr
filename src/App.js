import React, { useState } from "react";
import {Provider} from "react-redux"; 
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom'

import "./App.css";
import {ChatList} from './components/ChatList/ChatList'
import { Chat } from './screens/Chat/Chat';
import { Profile } from "./screens/Profile/Profile";
import { ThemeContext } from "./utils/ThemeContext";
import { store } from "./store";

const Home = () => <h4>Home page</h4>;


function App(){
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  return(
    <Provider store={store}>
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
    </ul>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path="/chat" element={<ChatList/>}>
      <Route path=":id" element={<Chat/>}></Route>
      </Route>
      <Route path='*' element={<h4>404</h4>}></Route>
    </Routes>
    </BrowserRouter>
    </ThemeContext.Provider>
    </Provider>

    
    
  );
}



export default App;