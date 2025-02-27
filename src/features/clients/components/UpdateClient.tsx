import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";
  import { Input } from "@/components/ui/input";
  import { Button } from "@/components/ui/button";
import { updateClientData } from '../api';
  
  type UpdateClientProps = {
    clientId: number;
    name: string;
    open: boolean;
    setOpen: (e: boolean) => void;
  };

export const UpdateClient = ({ open, setOpen, name,clientId }: UpdateClientProps) => {
    console.log(clientId);
    console.log(name);
    const [clientName, setClientName] = useState<string>(name);


    const updateClient = async() => {
        console.log(clientName);
       const result = await updateClientData(clientId, {
            client_name: clientName
        });
        console.log(result);

    };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md p-6 rounded-lg bg-white shadow-lg">
        <DialogHeader>
          <DialogTitle>Update Client</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <label className="text-sm font-medium text-gray-700">
            Client Name
          </label>
          <Input placeholder={clientName} value={clientName}  onChange={(e) => setClientName(e.target.value)}  className="mt-2" />
        </div>
        <div className="mt-4 flex justify-end">
          <Button onClick={() => updateClient()}>Update</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};