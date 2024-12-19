import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.svg";
import serveyIcon from "@/assets/serveyIcon.svg";

const Sidebar = () => {
  return (
    <div className="hidden lg:flex flex-col items-center top-0 left-0 bottom-0 sticky z-50 w-[20%] bg-primary h-full ">
      <div className="my-12">
        <Image src={logo} alt="logo" width={130} />
      </div>

      <MenuBtn title="Location" icon={serveyIcon} />
      <MenuBtn title="Events" icon={serveyIcon} />
      <MenuBtn title="Tiles" icon={serveyIcon} />
      <MenuBtn title="Event Surveys" icon={serveyIcon} />
      <MenuBtn title="Location" icon={serveyIcon} />
      <MenuBtn title="Events" icon={serveyIcon} />
      <MenuBtn title="Tiles" icon={serveyIcon} />
      <MenuBtn title="Event Surveys" icon={serveyIcon} />
    </div>
  );
};

export default Sidebar;

const MenuBtn: React.FC<{ title: string; icon: string }> = ({
  title,
  icon,
}) => (
  <div
    className="flex items-center gap-x-2 hover:bg-[#68A9FF] cursor-pointer rounded-[18px] w-[80%] py-2 pl-2 my-1 transition-colors"
  >
    <div className="p-1.5 bg-white rounded-xl">
      <Image src={icon} alt="icon"/>
    </div>
    <span className="text-white">{title}</span>
  </div>
);
