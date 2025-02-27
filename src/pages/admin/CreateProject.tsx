import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

import { Input } from "@/components/ui/input";
import { FolderClosed, Users, UserPen, Archive, Trash2 } from "lucide-react";
import { useState } from "react";

const CreateProject = () => {
  const [open, setOpen] = useState(false);
//   const users = [
//     {
//       name: "Alice Johnson",
//       client: "",
//       totalTime: "",
//       progress: "",
//       billableRent: "",
//       status: "Active",
//       actions: "",
//     },
//     {
//       name: "Bob Smith",
//       client: "",
//       totalTime: "",
//       progress: "",
//       billableRent: "",
//       status: "In Active",
//       actions: "",
//     },
//     {
//       name: "Charlie Brown",
//       client: "",
//       totalTime: "",
//       progress: "",
//       billableRent: "",
//       status: "Active",
//       actions: "",
//     },
//   ];
    const users: any = [];
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-2">
      <div className="flex justify-between p-2 ml-2">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <FolderClosed className="w-5 h-5" /> Projects
        </h2>
        <Button onClick={() => setOpen(true)} className="mt-4">
          + Add Projects
        </Button>
      </div>
      <div className="p-2 border-separate space-y-4 ">
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
                {users.length > 0 ? (
                  users.map((user: any) => (
                    <TableRow key={user.name}>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.client}</TableCell>
                      <TableCell>{user.totalTime}</TableCell>
                      <TableCell>{user.progress}</TableCell>
                      <TableCell>{user.status}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <UserPen />
                          <Archive />
                          <Trash2 />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-6">
                      <div className="flex flex-col items-center">
                        <Users className="w-10 h-10 text-gray-400" />
                        <p className="text-gray-500 mt-2 font-semibold">No Projects Found</p>
                        <p className="text-gray-500 mt-2">
                          Create Your First Project Now!
                        </p>
                        <Button onClick={() => setOpen(true)} className="mt-4">
                          + Add Project
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md p-6 rounded-lg bg-white shadow-lg">
          <DialogHeader>
            <DialogTitle>Create Project</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Project Name
            </label>
            <Input placeholder="John Doe" className="mt-2" />
          </div>
          <div className="mt-4 flex justify-end">
            <Button onClick={() => setOpen(false)}>Create</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateProject;
