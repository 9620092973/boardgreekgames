/* All Screens before user login */
import { _AuthStatus, _retrieveData } from "../Networks/LoginScreenCalls";
import {
    createStackNavigator,
  } from "react-navigation";
import Email from "../Screens/ForgetPassword/Email";
import NewPwd from "../Screens/ForgetPassword/NewPwd";
import SignupUsername from "../Screens/SignUp/SignupUsername";
import SignupFnameLname from "../Screens/SignUp/SignupFnameLname";
import SignupGender from "../Screens/SignUp/SignupGender";
import SignupEmail from "../Screens/SignUp/SignupEmail";
import SignupBday from "../Screens/SignUp/SignupBday";
import SignupLocation from "../Screens/SignUp/SignupLocation";
import SignupPwd from "../Screens/SignUp/SignupPwd";
import Login from "../Screens/LoginPage/Login";
import Welcome from "../Screens/WelcomePage/Welcome";
import GameInfoStack from "../Screens/GameInfo/GameInfo";

const WelcomeStack = createStackNavigator({
    Welcome: { screen: Welcome }
})

const LoginAuthStack = createStackNavigator({
    Login: { screen: Login },
    Email: { screen: Email },
    NewPwd: { screen: NewPwd }
});

const SignupAuthStack = createStackNavigator({
    Signup: { screen: SignupUsername },
    Signup1: { screen: SignupFnameLname },
    Signup2: { screen: SignupGender },
    Signup3: { screen: SignupEmail },
    Signup4: { screen: SignupPwd }
});

export { WelcomeStack, LoginAuthStack, SignupAuthStack }
/* {End} */

