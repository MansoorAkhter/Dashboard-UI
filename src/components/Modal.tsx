import Image from "next/image";
import close from "@/assets/close.svg";

const Modal = () => {
const isOpen = false;
  return (
    <div
      className={`fixed z-[999] inset-0 bg-black bg-opacity-25 backdrop-filter backdrop-blur-sm flex items-center justify-center  ${
        isOpen ? "fadeIn" : "hidden"
      }`}
    >
      <div className="relative bg-white h-[40%] w-[40%] rounded-[30px] drop-shadow-2xl px-6 place-content-center space-y-5">
        <button className="absolute top-3 right-3">
          <Image src={close} alt="close" width={30}/>
        </button>
        <h2 className="text-xl font-medium text-center">Enter survey name</h2>
        <input
          type="text"
          placeholder="Type here"
          className="bg-gray-100 text-black placeholder:text-gray-300 text-center w-full h-16 px-4 text rounded-2xl outline-none"
        />
        <div className="text-white text-sm flex items-center justify-center gap-x-2 mt-10">
          <button className="h-10 w-28 rounded-xl bg-secondary">Close</button>
          <button className="h-10 w-28 rounded-xl bg-primary">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
