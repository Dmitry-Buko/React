import MyComponent from "./components/MyComponent";
import MyComponent2 from "./components/MyComponent2";
import User from "./components/User";
import NotFound from "./components/NotFound";
import { Routes, Route, Link, NavLink } from "react-router";
import Dashboard from "./components/Dashboard";
import DashboardHome from "./components/DashboardHome";
import DashboardSettings from "./components/DashboardSettings";

import { useLocation } from "react-router";

const App = () => {
  const location = useLocation();
  console.log(location);
  
  return (
    <>
      <nav>
        <NavLink to={"/home"}>Домашняя</NavLink> |
        <NavLink to={"/about"}>Обо мне</NavLink> |
        <NavLink to={"/user"}>Пользователь</NavLink> |
        <NavLink to={"/dashboard"}>Dashboard</NavLink> |
      </nav>
      {/* <nav>
      <Link to={'/home'}>Домашняя</Link> | 
      <Link to={'/about'}>Обо мне</Link> | 
    </nav> */}
      <Routes>
        <Route path="/home" element={<MyComponent />} />
        <Route path="/about" element={<MyComponent2 />} />
        <Route path="/user/:id" element={<User />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="home" element={<DashboardHome />} />
          <Route path="settings" element={<DashboardSettings />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <div>
        <h4>Текущий URL: {location.pathname}</h4>
      </div>
    </>
  );
};

export default App;
