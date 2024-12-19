import React from "react";
import eye from "@/assets/eye.svg";
import trash from "@/assets/trash.svg";
import plus from "@/assets/plus.svg";
import Image from "next/image";
import SearchBar from "./SearchBar";
import AddServey from "./AddServey";
import OptionSelector from "./OptionSelector";

const DashboardTable = () => {
  const tableData = [
    { id: 1, servey: "Servey 1" },
    { id: 2, servey: "Servey 2" },
    { id: 3, servey: "Servey 3" },
    { id: 4, servey: "Servey 4" },
    { id: 5, servey: "Servey 5" },
  ];

  return (
    <div className="w-full">
      <AddServey />
      <div className="flex justify-between items-center my-5">
        <OptionSelector /> <SearchBar />
      </div>
      <table className="w-full bg-gray-200 border">
        <tbody>
          <tr>
            <th className="w-[10%]">ID</th>
            <th className="w-[65%]">Survey Name</th>
            <th className="w-[25%]">Action</th>
          </tr>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{item?.id}</td>
              <td>{item?.servey}</td>
              <td>
                <div className="flex justify-center items-center gap-x-3">
                  <Image src={trash} alt="eye_icon" width={15} />
                  <Image src={eye} alt="eye_icon" width={20} />
                  <Image src={plus} alt="eye_icon" width={18} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
