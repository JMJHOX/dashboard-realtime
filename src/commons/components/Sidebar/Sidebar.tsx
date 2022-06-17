import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import './Sidebar.css';
function Sidebar() {
  return (

    <div style={{ width: '25%' }}>
      <Box
        component="span"
        sx={{
          display: 'block',
          p: 1,
          m: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
      <div className="Sidebar">
      <div className="SidebarContainer">
        <div>
       <h3 className="SidebarTitle">
        Dashboard Control Panel
        <ul className="Sidebarlist">
            <li className="SidebarItem">
                <Button variant="contained">
                  Update Dashboard
                </Button>
            </li>
            <li className="SidebarItem">
            <Button variant="contained">
                  Remove Dashboard
                </Button>
            </li>
         
        </ul>
       </h3>
        </div>
      </div>
    </div>
      </Box>

    </div>
  );
}

export default Sidebar;
