import { Routes, Route } from "react-router";
import { Login } from "./Login";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
    </Routes>
  );
};
