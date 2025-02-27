import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type CreateProjectProps = {
  open: boolean;
  setOpen: (e: boolean) => void;
};

export const CreateProject = ({ open, setOpen }: CreateProjectProps) => {
  return (
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
  );
};
