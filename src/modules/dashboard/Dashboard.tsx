import React from "react";
import { useSelector } from "react-redux";
import BasicTable from "../../commons/components/shared/table/Table";
import Sidebar from "./Sidebar/Sidebar";
import { RootState } from "../../commons/store/Store";

import "./Dashboard.css";
function DashBoardModule() {
  let dataApi: any = useSelector((state: RootState) => state.dataState.apidata);

  return (
    <React.Fragment>
      <div className="container">
        <Sidebar></Sidebar>
        <div className="left-page">
          <BasicTable rows={dataApi}></BasicTable>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DashBoardModule;
