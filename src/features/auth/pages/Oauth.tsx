import { useAuth } from "@/hooks/use-auth";
import { storage } from "@/utils/storage";
import { useEffect, useState } from "react";
import { Navigate, useSearchParams } from "react-router";

export const OauthHandler = () => {
  const [searchParams] = useSearchParams();
  const { refetchUser, user } = useAuth();
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const token = searchParams.get("token");
    console.log("token", token);
    if (!token) {
      setErrorMsg("No token");
      return;
    }

    storage.setToken(token);
    refetchUser();
  }, [refetchUser, searchParams]);

  if (user) return <Navigate to="/" />;

  if (errorMsg) {
    return <div>{errorMsg}</div>;
  }

  return <div>Loading...</div>;
};
