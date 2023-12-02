import AuthLayout from "../layouts/AuthLayout";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
import {useState} from "react";

const Auth = ({navigation}) => {
    const [path, setPath] = useState("Sign In");

    return (
        <AuthLayout path={path} navigation={navigation} setPath={setPath}>
            {
                path === 'Sign In' ?
                    <SignInForm navigation={navigation}/>
                    :
                    <SignUpForm navigation={navigation}/>
            }
        </AuthLayout>
    )
}

export default Auth;