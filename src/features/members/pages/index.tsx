import { Users } from "lucide-react";
import { ShowMembers } from "../components/ShowTable";

export const MembersPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-2">
      <div className="flex justify-between p-2 ml-2">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <Users className="w-5 h-5" /> Members
        </h2>
      </div>
      <div className="p-2 border-separate space-y-4" />
      <ShowMembers />
    </div>
  );
};
