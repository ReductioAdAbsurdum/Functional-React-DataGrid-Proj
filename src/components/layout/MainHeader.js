import { NavLink } from "react-router-dom";
import "./MainHeader.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import AppleIcon from "@mui/icons-material/Apple";

const MainHeader = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <NavLink activeClassName="active" to="/customers">
              <PersonIcon fontSize="large" />
              <div>Customers</div>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/purchases">
              <ShoppingCartIcon fontSize="large" />
              <div>Purchases</div>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/items">
              <AppleIcon fontSize="large" />
              <div>Items</div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
