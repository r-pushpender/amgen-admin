import {Link} from "react-router-dom";
import logoImage from "../../assets/images/logo.png";
import ButtonPrimary from "../../components/buttons/buttonPrimary";
import CheckboxPrimary from "../../components/checkboxPrimary";
import InputPrimary from "../../components/inputPrimary";

// Styles
import "./styles.scss";

function Login() {
  return (
    <div className="login-page-style">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-sm-6">
            <div className="content-box">
              <div className="info-section">
                <img src={logoImage} className="logo-img" />
                <h4 className="title3">Sign In</h4>
              </div>

              <div className="form-section mt--45">
                <InputPrimary placeholder="Enter Email Address" lable="Email" />
                <InputPrimary placeholder="Enter Password" lable="Password" />
                <CheckboxPrimary label="Keep me signed in"/>

                <ButtonPrimary title="Sign In" />

                <div className="text-center mt--25">
                  <Link className="btn-link" to="/password-reset">Forgot your password?</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;