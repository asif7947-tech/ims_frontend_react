import { apiClient } from "@/lib/axios";
import { AuthUser } from "../types";

export async function getUser(): Promise<AuthUser> {
  const resp = await apiClient.get("/user/me");
  return resp.data;
}
