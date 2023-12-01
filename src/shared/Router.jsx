import Detail from "pages/Detail";
import Home from "pages/Home";
import Profile from "pages/Profile";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "pages/Login";
import { useSelector } from "react-redux";

export default function Router() {
  const userLogin = useSelector((state) => state.authSlice.userLogin);
  
  return (
    <BrowserRouter>
      <Routes>
      {
        userLogin ?
          <>
            <Route path={"/"} element={<Home />} />
            <Route path={"/profile"} element={<Profile />} />
            <Route path={"/detail/:id"} element={<Detail />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </>
          : <Route path={"*"} element={<Login />} />
      }
      </Routes>
    </BrowserRouter>
  );
}