import DashboardTable from "@/components/DashboardTable";
import Modal from "@/components/Modal";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center px-10">
      <Modal />
      <DashboardTable />
    </div>
  );
};

export default Dashboard;
