import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAxiosGet } from "../../../commons/services/ConsumeService";
import { addData } from "../../../commons/store/actions/dataActions";
import "./Sidebar.css";
const FetchData = () => {
  useAxiosGet(
    "https://zoo-animal-api.herokuapp.com/animals/rand"
  );
}

function Sidebar() {
  const [toggle, setToggle] = useState(false);


  const  data: any = useAxiosGet(
    "https://zoo-animal-api.herokuapp.com/animals/rand"
  );
  let dataApi = data;

  useEffect(() => {
  //  FetchData();
    // initialFetch
  }, [toggle]);

  const dispatch = useDispatch();

  return (
    <div style={{ width: "20%" }}>
      <Box
        component="span"
        sx={{
          display: "block",
          p: 1,
          m: 1,
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#101010" : "#fff",
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "grey.800",
          border: "1px solid",
          borderColor: (theme) =>
            theme.palette.mode === "dark" ? "grey.800" : "grey.300",
          borderRadius: 2,
          fontSize: "0.875rem",
          fontWeight: "700",
        }}
      >
        <div className="Sidebar">
          <div className="SidebarContainer">
            <div>
              <h3 className="SidebarTitle">
                Dashboard Control Panel
                <div className="Sidebarlist">
                  <Button
                    variant="contained"
                    onClick={() => {
                      const apiData: any = {
                        name: dataApi.data?.name || "",
                        calories: dataApi.data?.latin_name || "",
                        fat: dataApi.data?.lifespan || "",
                        carbs: dataApi.data?.diet || "",
                        protein: dataApi.data?.id || "",
                      };
                      setToggle((prevState: any) => !prevState);
                      console.log("sideBarApi", apiData);
                      dispatch(addData(apiData));
                    }}
                  >
                    Update Dashboard
                  </Button>
                  <Button variant="contained">Remove Dashboard</Button>
                </div>
              </h3>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default Sidebar;
