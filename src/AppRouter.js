import {BrowserRouter, Route, Switch} from "react-router-dom";
import ConfirmSignin from "./containers/confirmSignin";
import CreateContent from "./containers/createContent";
import EmailSent from "./containers/emailSent";
import Login from "./containers/login";
import PasswordReset from "./containers/passwordReset";

function AppRouter() {
  return (
    <div style={{}}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/password-reset" component={PasswordReset} />
          <Route exact path="/confirm-signin" component={ConfirmSignin} />
          <Route exact path="/email-sent" component={EmailSent} />
          <Route exact path="/create-content" component={CreateContent} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
