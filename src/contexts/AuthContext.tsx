import { createContext, useMemo } from "react";
import {
  AuthUser,
  getUser,
  LoginCredentialsDTO,
  loginWithEmailAndPassword,
} from "@/features/auth";
import {
  QueryKey,
  QueryStatus,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { storage } from "@/utils/storage";

// TODO: improve types
export interface AuthContextValue {
  user: AuthUser | null | undefined;
  authStatus: QueryStatus;
  error: unknown;
  refetchUser: Function;
  login: Function;
  isLoggingIn: boolean;
  logout: () => void;
  isLoggingOut: boolean;
}

export const AuthContext = createContext<AuthContextValue | null>(null);
AuthContext.displayName = "AuthContext";

export interface AuthProviderProps {
  children: React.ReactNode;
  authKey?: QueryKey;
  waitInitial?: boolean;
}

export function AuthProvider(props: AuthProviderProps) {
  const { children, authKey = ["auth-user"], waitInitial = true } = props;
  const queryClient = useQueryClient();

  const {
    data: user,
    error,
    status,
    refetch,
  } = useQuery({ queryKey: authKey, queryFn: getUser });

  const loginMutation = useMutation({
    mutationFn: loginFn,
    onSuccess: (user) => {
      console.log("user", user);
      queryClient.setQueryData(authKey, user);
    },
    // onError: (error) => {
    //   console.log("error Test", error);
    //   // queryClient.setQueryData(authKey, error);
    // }
  });

  const logoutMutation = useMutation({
    mutationFn: logoutFn,
    onSuccess: () => {
      queryClient.clear();
    },
  });

  const value = useMemo(
    () => ({
      user,
      authStatus: status,
      error,
      refetchUser: refetch,
      login: loginMutation.mutateAsync,
      isLoggingIn: loginMutation.isPending,
      logout: logoutMutation.mutateAsync,
      isLoggingOut: logoutMutation.isPending,
    }),
    [
      user,
      status,
      error,
      refetch,
      loginMutation.mutateAsync,
      loginMutation.isPending,
      logoutMutation.mutateAsync,
      logoutMutation.isPending,
    ],
  );

  if (status !== "pending" || !waitInitial) {
    console.log("AuthContext", error);
    return (
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
  }

  return <div>Loading...</div>;
}

async function loginFn(data: LoginCredentialsDTO) {
  const resp = await loginWithEmailAndPassword(data);
  console.log(`resp Test  jdjdjd`, resp);
  console.log(resp);
  const { jwt , user } = resp;
  console.log(`my userr   user`, user);
  console.log(`my userr   jwt`, jwt);
  storage.setToken(jwt);
  return user;
}

async function logoutFn() {
  storage.clearToken();
  window.location.assign(window.location.origin as unknown as string);
}
