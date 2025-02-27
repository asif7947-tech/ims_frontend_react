import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

import { Users, UserPen, Trash2 } from "lucide-react";
import { EditMember } from "./EditForm";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const ShowMembers = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-300 p-2 rounded-lg bg-gray-50">
      <div className="p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.length < 1 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-6">
                  <div className="flex flex-col items-center">
                    <Users className="w-10 h-10 text-gray-400" />
                    <p className="text-gray-500 mt-2 font-semibold">
                      No Members Found
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              users.map((user) => (
                <TableRow key={user.name}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{user.status}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="icon" onClick={() => setOpen(true)}>
                        <UserPen />
                      </Button>
                      <Button size="icon">
                        <Trash2 />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      <EditMember open={open} setOpen={setOpen} />
    </div>
  );
};

const users = [
  {
    name: "Alice Johnson",
    email: "",
    role: "",
    status: "Active",
    actions: "",
  },
  {
    name: "Bob Smith",
    email: "",
    role: "",
    status: "In Active",
    actions: "",
  },
  {
    name: "Charlie Brown",
    email: "",
    role: "",
    status: "Active",
    actions: "",
  },
];
