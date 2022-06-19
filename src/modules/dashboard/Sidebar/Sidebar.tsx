import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import axios from "axios";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../../../commons/store/actions/dataActions";
import "./Sidebar.css";

function Sidebar() {
  const urlFetch = "https://zoo-animal-api.herokuapp.com/animals/rand";

  const dispatch = useDispatch();
  const onItemClick = useCallback(() => {
    const fetchDataReload = () => {
      axios.get(urlFetch).then((response) => {
        const dataApi = response;
        const apiData: any = {
          name: dataApi.data.name,
          calories: dataApi.data.latin_name,
          fat: dataApi.data.lifespan,
          carbs: dataApi.data.diet,
          protein: dataApi.data.id,
        };

        dispatch(addData(apiData));
      });
    };

    fetchDataReload();
  }, [dispatch]);

  return (
    <div className="containerSide">
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
                      onItemClick();
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
