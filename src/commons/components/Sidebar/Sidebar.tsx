import './Sidebar.css';
function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="SidebarContainer">
        <div>
       <h3 className="SidebarTitle">
        Sidebar
        <ul className="Sidebarlist">
            <li className="SidebarItem">
                Option 1
            </li>
            <li className="SidebarItem">
                Option 2
            </li>
            <li className="SidebarItem">
                Option 3
            </li>
        </ul>
       </h3>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
