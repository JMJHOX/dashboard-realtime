import React, { useEffect, useState } from "react";
import BasicTable from "../../commons/components/shared/table/Table";
import Sidebar from "../../commons/components/Sidebar/Sidebar";
import { dataRowFormat } from "../../commons/interfaces/DataRowFormat";
import { useAxiosGet } from "../../commons/services/ConsumeService";

import "./Dashboard.css";
function DashBoardModule() {
  const result:dataRowFormat[]=[];
    let dataApi:any   = useAxiosGet('https://zoo-animal-api.herokuapp.com/animals/rand')

  const [data, setData] = useState(result);

  useEffect(() => {


      const apiData:any = {
        name: dataApi.name,
        calories: dataApi.data?.latin_name,
        fat: dataApi.data?.lifespan,
        carbs: dataApi.data?.diet,
        protein: dataApi.data?.id
      }
      console.log(apiData)
      console.log(dataApi)
       setData([apiData]);
 
    
  }, [data])
  
  return (
    <React.Fragment>
      <div className="container">
        <Sidebar></Sidebar>
        <div className="left-page">
          <BasicTable rows = {data} ></BasicTable>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DashBoardModule;
