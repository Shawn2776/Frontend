import React from "react";
import { Dashboard } from './Dashboard'
import { Signin } from './SigninForm'
import SignupForm from "./SignupForm";

export default function App() {
  // State for isLoggedIn and user type

  // useEffect to check if auth token exists in User's local storage

  return (
    <div>
      App
      {/* Link to Home/Signin */}
      {/* Link to Signup */}
      {/* conditionally rendered Link to Dashboard if logged in */}
      {/* conditionally rendered Link to Classes if logged in */}
      {/* Switch for Routes */}
      {/* Route for path root that renders SigninForm */}
      {/* Route for path /signup that renders SignupForm */}
      <SignupForm />
      {/* PrivateRoute for path "/dashboard" that renders Dashboard
        Component based on role(pass "instructor" to optionType if user is intructor) */}
      {/* PrivateRoute for path "/classes" that renders Classes Component if logged in */}
      {/* End of Switch */}
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/Signin">Login</Link>
            </li>
            <li>
              <Link onClick={logout}>Logout</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <Route path="/Signin" component={Signin} />
            <Route component={Signin} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
