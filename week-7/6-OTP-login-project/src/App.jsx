import Login from "./component/Login"
import { RecoilRoot,atom,selector,useRecoilState,useRecoilValue, } from 'recoil';
import { loginAtom } from "./store/atoms/loginAtom";
import OTP from "./component/OTP";


function App() {
  
  return (
    <RecoilRoot>
      <Display/>
    </RecoilRoot>
  )
}

function Display(){
  const isLogin = useRecoilValue(loginAtom)
  return <div>
    {isLogin ? <div>Logout</div> : <Login/>}
  </div>
}

export default App
