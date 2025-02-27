import { API_ROUTES } from "@/config/constants";
import { apiClient } from "@/lib/axios";
import { Project, UpdateProject } from "./types";
import { queryOptions } from "@tanstack/react-query";


export async function getImsProjets(): Promise<Project[]> {
    const resp = await apiClient.get(API_ROUTES.geProjects);
    return resp.data.data;
};

export const getProjects = queryOptions({
    queryKey: ["projects", "list"],
    queryFn: getImsProjets
});


export async function updateProject(clientId: number,data: UpdateProject): Promise<any> {
    const resp = await apiClient.put(`${API_ROUTES.getClients}/${clientId}`, data);
    console.log(resp);
    return resp.data.data;
    
};