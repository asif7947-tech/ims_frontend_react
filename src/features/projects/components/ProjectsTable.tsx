import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

import { UserPen, Archive, Trash2, FolderClosed } from "lucide-react";
import { CreateProject } from "./CreateForm";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {  getProjects } from "../api";
import { Project } from "../types";
import { useQuery } from "@tanstack/react-query";

export const ProjectsTable = () => {
  const [open, setOpen] = useState(false);

  const {data: projects , isLoading ,isPending , isError, error, refetch } =useQuery(getProjects)

  return (
    <div className="border border-gray-300 p-2 rounded-lg bg-gray-50">
      <div className="p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Total Time</TableHead>
              <TableHead>Progress</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
          { projects && projects.length > 0 ? (
            projects.map((project: Project) => (
              <TableRow key={project.id}>
                <TableCell>{project.project_name}</TableCell>
                <TableCell>{project.client.client_name}</TableCell>
                <TableCell>{project.total_time}</TableCell>
                <TableCell>{project.progress}</TableCell>
                <TableCell>{project.status}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <UserPen />
                    <Archive />
                    <Trash2 />
                  </div>
                </TableCell>
              </TableRow>
            ))
          ):(
            <TableRow>
                <TableCell colSpan={6} className="text-center py-6">
                  <div className="flex flex-col items-center">
                    <FolderClosed className="w-10 h-10 text-gray-400" />
                    <p className="text-gray-500 mt-2 font-semibold">
                      No Projects Found
                    </p>
                    <p className="text-gray-500 mt-2">
                      Create Your First Project Now!
                    </p>
                    <Button onClick={() => setOpen(true)} className="mt-4">
                      + Add Project
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
          )
          }
          </TableBody>
        </Table>
      </div>
      <CreateProject open={open} setOpen={setOpen} />
    </div>
  );
};

