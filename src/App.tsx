import { Navigate, Route, Routes } from "react-router";
import { Login } from "./features/auth/pages/Login";
import { Dashboard } from "./features/misc/Dashboard";
import { NotFound } from "./features/misc/NotFound";
import { OauthHandler } from "./features/auth/pages/Oauth";
import { MembersPage } from "./features/members/pages";
import { ProjectsPage } from "./features/projects/pages";
import { ClientsPage } from "./features/clients/pages";
import { MainPage } from "./features/misc/MainPage";
import { useAuth } from "./hooks/use-auth";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();

  if (user) return children;
  return <Navigate to="/login" />;
};

const DashboardLayout = () => (
  <ProtectedRoute>
    <Dashboard />
  </ProtectedRoute>
);

function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route index element={<MainPage />} />
        <Route path="members" element={<MembersPage />} />
        <Route path="user/create" element={<ClientsPage />} />
        <Route path="project/create" element={<ProjectsPage />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/oauth" element={<OauthHandler />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
