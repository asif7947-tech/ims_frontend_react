import { FolderClosed } from "lucide-react";
import { ProjectsTable } from "../components/ProjectsTable";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CreateProject } from "../components/CreateForm";

export const ProjectsPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-2">
      <div className="flex justify-between p-2 ml-2">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <FolderClosed className="w-5 h-5" /> Projects
        </h2>
        <Button onClick={() => setOpen(true)} className="mt-4">
          + Add Project
        </Button>
        <CreateProject open={open} setOpen={setOpen} />
      </div>
      <div className="p-2 border-separate space-y-4" />
      <ProjectsTable />
    </div>
  );
};
