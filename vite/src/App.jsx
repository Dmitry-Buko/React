import { NavLink, Route, Routes } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import MyComponent from "./components/MyComponent";
import NotFound from "./components/NotFound";
import UserProfile from "./components/UserProfile";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <>
      <nav>
        <NavLink to={"/home"}> Home </NavLink> |
        <NavLink to={"/about"}> About </NavLink> |
        <NavLink to={"/user"}> User Profile </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<UserProfile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />


        {/* <Route>
          
        </Route> */}

      </Routes>
    </>
  );
};

export default App;
