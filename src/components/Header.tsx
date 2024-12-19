import bell from "@/assets/bell.svg";
import avatar from "@/assets/avatar.png";
import Image from "next/image";


const Header = () => {
  return (
    <div className=" h-20 w-full flex items-center justify-end pr-9 mb-2">
      <div className="bg-gray-100 h-14 w-14 place-items-center place-content-center rounded-full scale-75">
        <Image src={bell} alt="notify bell" />
      </div>
      <div className="h-14 w-14 place-items-center place-content-center rounded-full scale-75">
        <Image src={avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default Header;
