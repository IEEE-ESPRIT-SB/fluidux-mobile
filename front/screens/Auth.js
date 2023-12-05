import AuthLayout from "../layouts/AuthLayout";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
import {useState} from "react";

const Auth = ({navigation}) => {
    const [path, setPath] = useState("SIGN IN");

    return (
        <AuthLayout path={path} navigation={navigation} setPath={setPath}>
            {
                path === 'SIGN IN' ?
                    <SignInForm navigation={navigation}/>
                    :
                    <SignUpForm navigation={navigation} setPath={setPath}/>
            }
        </AuthLayout>
    )
}

export default Auth;