import React from "react";
import BasicTable from "../../commons/components/shared/table/Table";
import Sidebar from "../../commons/components/Sidebar/Sidebar";
import './Dashboard.css';
function DashBoardModule() {
  return (
    <React.Fragment>
      <div className="container">
        <Sidebar ></Sidebar>
        <div className="left-page">
           <BasicTable></BasicTable>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DashBoardModule;
