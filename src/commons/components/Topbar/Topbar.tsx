import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";
import { Button, CssBaseline } from "@mui/material";

import "./Topbar.css";
function Topbar() {
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar className="toolbarWrap">
        <Typography variant="h6">Dashboard.io</Typography>
        <div className="TopbarContainer">
          <Button component={Link} variant="contained" to="/" color="secondary">
            {" Home "}
          </Button>
          <Button
            component={Link}
            variant="contained"
            to="/config"
            color="secondary"
          >
            {" Configuration "}
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;
