import { Client } from "../clients/types"




export interface ProjectsResponse {
    success: boolean
    message: string
    data: Project[]
  }
  
  export interface Project {
    id: number;
    project_name: string;
    total_time: string;
    progress: string;
    status: string;
    created_at: string
    updated_at: string
    client: Client
    sprints: Sprint[]
  }

  
  export interface Sprint {
    id: number
    name: string
    start_date: string
    end_date: string
    status: string
    user_projects: UserProject[]
  }
  
  export interface UserProject {
    id: number
    hours_spent: number
    hours_assigned: number
    status: string
    hours_allocated_per_day?: number
    created_at: string
    updated_at: string
    jiraId: number
  }

  export interface UpdateProject {
    project_name: string
  }