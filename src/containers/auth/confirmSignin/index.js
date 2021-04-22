import { useHistory } from "react-router-dom";
import ButtonPrimary from "../../../components/buttons/buttonPrimary";
import ButtonOutline from "../../../components/buttons/buttonOutline";
import InputPrimary from "../../../components/inputPrimary";
import InfoMessage from "../../../components/infoMessage";
import * as yup from 'yup';

// Styles
import "./styles.scss";
import { Field, Formik } from "formik";

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
              <Formik
                initialValues={{
                  otp: ""
                }}
                validationSchema={yup.object().shape({
                  otp: yup.number().typeError("OTP should be numeric.").required("OTP is required").test('otp', 'OTP should be of six digits', (otp) => otp?.toString()?.length == 6)
                })}
                onSubmit={(values) => {
                  console.log(values);
                  handleClick();
                }}
              >
                {({ values, setFieldValue, submitForm }) => (
                  <div className="form-section mt--45">
                    <div className="mb-20">
                      <Field
                        component={InputPrimary}
                        value={values.otp}
                        name="otp"
                        placeholder="Enter verification code"
                        label="Verification Code"
                      />
                    </div>
                    <ButtonPrimary title="Confirm" onClick={() => submitForm()} />
                    <div className="description description-sm bordertop-style">
                      Haven’t received a code?
                    </div>

                    <div className="text-center">
                      <ButtonOutline title="Resend Code" />
                    </div>
                  </div>
                )}
              </Formik>

            </div>
          </div>
        </div>
      </div>

      <InfoMessage />
    </div>
  );
}

export default ConfirmSignin;
