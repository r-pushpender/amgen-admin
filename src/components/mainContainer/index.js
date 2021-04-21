import {
  Form,
  Nav,
  Button,
  FormControl,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import {
  FaBell,
  FaChartBar,
  FaInfoCircle,
  FaLongArrowAltLeft,
  FaMicrosoft,
  FaRegCalendarAlt,
  FaRegImage,
  FaSearch,
  FaShieldAlt,
  FaUserFriends,
  FaYelp,
} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import logoImage from "../../assets/images/logo.png";

// Styles
import "./styles.scss";

function MainContainer(props) {
  return (
    <main className="main-container-style">
      <div className="navigation">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-sm-2">
              <img src={logoImage} className="logo" />
            </div>
            <div className="col-sm-4">
              <Form inline className="search-box-style">
                <FormControl
                  type="text"
                  placeholder="Search..."
                  className="mr-sm-2"
                />
                <Button className="searchIcon">
                  <FaSearch />
                </Button>
              </Form>
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
                  <DropdownButton
                    id="dropdown-item-button"
                    title="Monica Simons"
                  >
                    <Dropdown.ItemText>Item 1</Dropdown.ItemText>
                    <Dropdown.Item as="button">Item 2</Dropdown.Item>
                    <Dropdown.Item as="button">Item 3</Dropdown.Item>
                    <Dropdown.Item as="button">Item 4</Dropdown.Item>
                  </DropdownButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row-container">
        <div className="dark-style col-left">
          <Nav className="flex-column">
            <NavLink
              className="navlink"
              activeClassName="active"
              exact
              to="/"
            >
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
          </Nav>
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
