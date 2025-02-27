import { API_ROUTES } from "@/config/constants";
import { apiClient } from "@/lib/axios";
import { Client, ClientsResponse, UpdateClient } from "./types";
import { queryOptions, useMutation } from "@tanstack/react-query";


export async function getImsClients(): Promise<Client[]> {
    const resp = await apiClient.get(API_ROUTES.getClients);
    return resp.data.data;
};

export const getClients = queryOptions({
    queryKey: ["clients", "list"],
    queryFn: getImsClients
});


export async function updateClientData(clientId: number,data: UpdateClient): Promise<any> {
    const resp = await apiClient.put(`${API_ROUTES.getClients}/${clientId}`, data);
    console.log(resp);
    return resp.data.data;
    
};
