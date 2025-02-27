


export interface ClientsResponse {
    success: boolean
    message: string
    data: Client[]
  }
export interface Client {
    id: number
    client_name: string
    status: string;
    created_at: string
    updated_at: string
    projects: ClientProject[]
  }
  
  export interface ClientProject {
    id: number
    project_name: string
    created_at: string
    updated_at: string
  }

  export interface UpdateClient{
    client_name: string;
  }