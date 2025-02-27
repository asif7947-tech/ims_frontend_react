import { apiClient } from "@/lib/axios";
import { UserResponse } from "../types";
import { API_ROUTES } from "@/config/constants";

export type LoginCredentialsDTO = {
  email: string;
  password: string;
};

export async function loginWithEmailAndPassword(
  data: LoginCredentialsDTO,
): Promise<UserResponse> {
    const resp = await apiClient.post(API_ROUTES.login, data);
    return resp.data.data;
}
