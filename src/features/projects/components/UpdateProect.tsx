import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";
  import { Input } from "@/components/ui/input";
  import { Button } from "@/components/ui/button";
import { useState } from "react";
import { updateProject } from "../api";
  
  type UpdateProjectProps = {
    proectId: number;
    name: string;
    open: boolean;
    setOpen: (e: boolean) => void;
  };
  
  export const UpdateProject = ({ open, setOpen,name,proectId }: UpdateProjectProps) => {
        const [projectName, setProjectName] = useState<string>(name);
    
        const updateProect = async() => {
            console.log(projectName);
           const result = await updateProject(proectId, {
                project_name: projectName
            });
            console.log(result);
            setOpen(false)
        };
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md p-6 rounded-lg bg-white shadow-lg">
          <DialogHeader>
            <DialogTitle>Update Project</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Project Name
            </label>
          <Input placeholder="Enter Proect Name" value={projectName}  onChange={(e) => setProjectName(e.target.value)}  className="mt-2" />
          </div>
          <div className="mt-4 flex justify-end">
            <Button onClick={() => updateProect() }>Update</Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  };