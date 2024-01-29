import Login from "./component/Login"
import { RecoilRoot,atom,selector,useRecoilState,useRecoilValue, } from 'recoil';
import { loginAtom } from "./store/atoms/loginAtom";
import OTP from "./component/OTP";


function App() {
  
  return (
    <RecoilRoot>
      <Login/>
    </RecoilRoot>
  )
}

export default App
