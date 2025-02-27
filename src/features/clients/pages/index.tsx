import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CreateClient } from "../components/CreateForm";
import { ClientsTable } from "../components/ShowClients";

export const ClientsPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-2">
      <div className="flex justify-between p-2 ml-2">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <User className="w-5 h-5" /> Clients
        </h2>
        <Button onClick={() => setOpen(true)} className="mt-4">
          + Add Clients
        </Button>
        <CreateClient open={open} setOpen={setOpen} />
      </div>
      <div className="p-2 border-separate space-y-4" />
      <ClientsTable />
    </div>
  );
};
