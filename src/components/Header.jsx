import React from "react";
import { Button } from "./ui/button";
import { Upload } from "lucide-react";

const Header = () => {
  return (
    <div className="w-screen shadow-sm px-20 py-4 flex justify-between items-center">
      <div>AI Planet</div>
      <div>
        <Button className="">
          <Upload className="w-4 h-4 mr-2" />
          upload
        </Button>
      </div>
    </div>
  );
};

export default Header;
