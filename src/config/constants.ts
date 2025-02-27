
export const API_URL = import.meta.env.VITE_BASE_API_URL;

export const API_ROUTES = {
  login: "/auth/login",
  login_with_google: "/auth/google",
  getClients: "/clients",
  geProjects: "/projects",
  getMembers: "/user",
  updateClient: "/clients",
};
