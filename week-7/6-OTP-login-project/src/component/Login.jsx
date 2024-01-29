// import { loginAtom } from "../store/atoms/loginAtom"
// import { RecoilRoot,atom,selector,useRecoilState,useRecoilValue, } from 'recoil';
import OTP from "./OTP";
import Number from "./Number";
import { useState } from "react";

export default function Login(){

    // const [loginpage, setLoginpage] = useRecoilState(loginAtom)
    // console.log(loginpage)
    const [loginpage, setLoginpage] = useState(true)


    return <div>
        {loginpage ? <Number setLoginpage={setLoginpage}/> : <OTP/>}
    </div>
}