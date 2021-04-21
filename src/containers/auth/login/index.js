import { Link, useHistory } from "react-router-dom";
import logoImage from "../../../assets/images/logo.png";
import ButtonPrimary from "../../../components/buttons/buttonPrimary";
import CheckboxPrimary from "../../../components/checkboxPrimary";
import InfoMessage from "../../../components/infoMessage";
import InputPrimary from "../../../components/inputPrimary";
import { Formik, Field } from 'formik';

// Styles
import "./styles.scss";

function Login() {
  let history = useHistory();

  function handleClick() {
    history.push("/confirm-signin");
  }

  return (
    <div className="login-page-style">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-sm-6">
            <div className="auth-box">
              <div className="info-section">
                <img src={logoImage} className="logo-img" />
                <h4 className="title3">Sign In</h4>
              </div>

              <Formik
                enableReinitialize
                initialValues={{
                  username: ''
                }}
                onSubmit={() => {
                  console.log("submit");
                }}
              >
                {({ values, setFieldValue, submitForm }) => (
                  <form>
                    <div>{JSON.stringify(values)}</div>
                    <div className="form-section mt--45">
                      <Field
                        component={InputPrimary}
                        name="username"
                        value={values.username}
                        placeholder="Enter your username" label="Username"
                      />
                      <InputPrimary placeholder="Enter Email Address" label="Email" />
                      <InputPrimary placeholder="Enter Password" label="Password" />
                      <CheckboxPrimary label="Keep me signed in" />

                      <ButtonPrimary title="Sign In" onClick={() => submitForm} />

                      <div className="text-center mt--25">
                        <Link className="btn-link" to="/password-reset">
                          Forgot your password?
                  </Link>
                      </div>
                    </div>
                  </form>
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

export default Login;
