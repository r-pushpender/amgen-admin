import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./containers/auth/login";
import ConfirmSignin from "./containers/auth/confirmSignin";
import EmailSent from "./containers/auth/emailSent";
import PasswordReset from "./containers/auth/passwordReset";
import CreateContent from "./containers/createContent";
import AddAdmin from "./containers/addAdmin";
import ContentListing from "./containers/contentListing";

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
          <Route exact path="/add-admin" component={AddAdmin} />
          <Route exact path="/content-listing" component={ContentListing}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
