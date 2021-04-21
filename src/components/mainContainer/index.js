import {Input, Menu, Dropdown} from "antd";
import {
  FaBell,
  FaChartBar,
  FaInfoCircle,
  FaLongArrowAltLeft,
  FaMicrosoft,
  FaRegCalendarAlt,
  FaRegImage,
  FaShieldAlt,
  FaUserFriends,
  FaYelp,
  FaChevronDown,
} from "react-icons/fa";
import {Link, NavLink} from "react-router-dom";
import logoImage from "../../assets/images/logo.svg";

// Styles
import "./styles.scss";

const {Search} = Input;

function MainContainer(props) {
  const onSearch = (value) => console.log(value);

  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">
          1st item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          2nd item
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <main className="main-container-style">
      <div className="navigation">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-sm-2">
              <Link to="/">
                <img src={logoImage} className="logo" />
              </Link>
            </div>
            <div className="col-sm-4">
              <div className="search-box">
                <Search placeholder="Search..." onSearch={onSearch} />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="flex-section">
                <div className="notification">
                  <FaBell className="bell-icon" />
                  <span className="notification-text">25</span>
                </div>

                <div className="profile-dropdown">
                  <div className="img">
                    <img src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=666&q=80" />
                  </div>
                  <Dropdown overlay={menu}>
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Monica Simons <FaChevronDown className="icon" />
                    </a>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row-container">
        <div className="dark-style col-left">
          <nav className="flex-column">
            <NavLink className="navlink" activeClassName="active" exact to="/">
              <FaMicrosoft className="icon" /> Dashboard
            </NavLink>
            <NavLink
              className="navlink"
              activeClassName="active"
              to="/add-admin"
            >
              <FaShieldAlt className="icon" /> Admins
            </NavLink>
            <NavLink
              className="navlink"
              activeClassName="active"
              to="/create-content"
            >
              <FaRegImage className="icon" /> Content
            </NavLink>
            <NavLink className="navlink" activeClassName="active" to="/users">
              <FaUserFriends className="icon" /> Users
            </NavLink>
            <NavLink
              className="navlink"
              activeClassName="active"
              to="/appointments"
            >
              <FaRegCalendarAlt className="icon" /> Appointments
            </NavLink>
            <NavLink className="navlink" activeClassName="active" to="/events">
              <FaYelp className="icon" /> Events
            </NavLink>

            <div className="heading">Other Information</div>

            <NavLink className="navlink" to="/usage-analytics">
              <FaChartBar className="icon" /> Usage Analytics
            </NavLink>
            <NavLink className="navlink" to="help">
              <FaInfoCircle className="icon" /> Help
            </NavLink>
          </nav>
        </div>
        <div className="content-section col-right">
          <div className="info-section">
            <button className="back-button">
              <FaLongArrowAltLeft />
              <span> Back</span>
            </button>
            <h4 className="title-page">{props.pageTitle}</h4>
          </div>
          {props.children}
        </div>
      </div>
    </main>
  );
}

export default MainContainer;
