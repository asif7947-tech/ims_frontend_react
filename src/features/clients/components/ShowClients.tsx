import { useEffect, useState } from "react";

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

import { UserPen, Archive, Trash2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CreateClient } from "./CreateForm";
import { getClients, getImsClients } from "../api";
import { useQuery } from "@tanstack/react-query";
import { Client } from "../types";
import { UpdateClient } from "./UpdateClient";

export const ClientsTable = () => {
  const [open, setOpen] = useState(false);
  const [clientId, setClientId] = useState<number>(0);
  const [clientName, setClientName] = useState<string>("");
  const [openUpdateClient, setOpenUpdateClient] = useState(false);
 const { data: clients , isLoading, isPending} = useQuery(getClients)

 const handleUpdateClient = (id: number, name: string) => {
    setClientId(id);
    setClientName(name);
    setOpenUpdateClient(true);
  };

 
  return (
    <div className="border border-gray-300 p-2 rounded-lg bg-gray-50">
      <div className="p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            { clients && clients.length > 0 ? (
              clients.map((client: Client) => (
                <TableRow key={client.id}>
                  <TableCell>{client.client_name}</TableCell>
                  <TableCell>{client.status}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <UserPen  onClick={() =>handleUpdateClient(client.id, client.client_name) } />
                      <Archive />
                      <Trash2 />
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-6">
                  <div className="flex flex-col items-center">
                    <Users className="w-10 h-10 text-gray-400" />
                    <p className="text-gray-500 mt-2 font-semibold">
                      No Clients Found
                    </p>
                    <p className="text-gray-500 mt-2">
                      Create Your First Client!
                    </p>
                    <Button onClick={() => setOpen(true)} className="mt-4">
                      + Add Client
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <CreateClient open={open} setOpen={setOpen} />
      <UpdateClient open={openUpdateClient} setOpen={setOpenUpdateClient} name={clientName} clientId={clientId} />
    </div>
  );
};
