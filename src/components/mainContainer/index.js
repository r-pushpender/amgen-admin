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
                    <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                    <Dropdown.Item as="button">Action</Dropdown.Item>
                    <Dropdown.Item as="button">Another action</Dropdown.Item>
                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                  </DropdownButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row-container">
        <div className="dark-style col-left">
          <Nav activeKey="/admins" className="flex-column">
            <Nav.Link href="/">
              <FaMicrosoft className="icon" /> Dashboard
            </Nav.Link>
            <Nav.Link href="/admins">
              <FaShieldAlt className="icon" /> Admins
            </Nav.Link>
            <Nav.Link href="#">
              <FaRegImage className="icon" /> Content
            </Nav.Link>
            <Nav.Link href="#">
              <FaUserFriends className="icon" /> Users
            </Nav.Link>
            <Nav.Link href="#">
              <FaRegCalendarAlt className="icon" /> Appointments
            </Nav.Link>
            <Nav.Link href="#">
              <FaYelp className="icon" /> Events
            </Nav.Link>

            <div className="heading">Other Information</div>

            <Nav.Link href="#">
              <FaChartBar className="icon" /> Usage Analytics
            </Nav.Link>
            <Nav.Link href="#">
              <FaInfoCircle className="icon" /> Help
            </Nav.Link>
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
