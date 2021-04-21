import {useHistory} from "react-router-dom";
import ButtonPrimary from "../../../components/buttons/buttonPrimary";
import ButtonOutline from "../../../components/buttons/buttonOutline";
import InputPrimary from "../../../components/inputPrimary";
import InfoMessage from "../../../components/infoMessage";

// Styles
import "./styles.scss";

function ConfirmSignin(props) {
  let history = useHistory();

  function handleClick() {
    history.push("/create-content");
  }
  return (
    <div className="password-reset-style">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-sm-6">
            <div className="auth-box">
              <div className="info-section">
                <h4 className="title1">Confirm Sign In</h4>
                <div className="description mt--10">
                  Please enter the 6 digit code send to your email
                </div>
              </div>

              <div className="form-section mt--45">
                <InputPrimary
                  placeholder="Enter verification code"
                  label="Verification Code"
                />
                <ButtonPrimary title="Confirm" onClick={handleClick} />
                <div className="description description-sm bordertop-style">
                  Haven’t received a code?
                </div>

                <div className="text-center">
                  <ButtonOutline title="Resend Code" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <InfoMessage />
    </div>
  );
}

export default ConfirmSignin;
