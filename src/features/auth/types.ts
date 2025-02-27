export type AuthUser = {
  id: number;
  first_name: string;
  last_name: string;
  designation: string;
  email: string;
  role: string;
  isActive: boolean;
  created_at: Date;
  updated_at: Date;
  // user_projects: UserProjects[];
  // jira: Jira[];
  // leaveRequests: LeaveRequest[];
  // userLeaves: UserLeave[];
};

export type UserResponse = {
  jwt: string;
  user: AuthUser;
};
