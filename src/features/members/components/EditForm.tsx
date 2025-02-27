import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// TODO: replace with shadcn/select
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type EditMemberProps = {
  open: boolean;
  setOpen: (e: boolean) => void;
};

export const EditMember = ({ open, setOpen }: EditMemberProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md p-6 rounded-lg bg-white shadow-lg">
        <DialogHeader>
          <DialogTitle>Invite Member</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <Input placeholder="Member Email" className="mt-2" />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Role</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Admin</SelectItem>
              <SelectItem value="banana">Manager</SelectItem>
              <SelectItem value="blueberry">Client</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mt-4 flex justify-end">
          <Button onClick={() => setOpen(false)}>Create</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
