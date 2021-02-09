import './index.scss';
import { useHistory } from "react-router-dom";

const Login = ()=> {
  const history = useHistory()
  return (
    <div className="LoginPage">
      Login
      <button onClick={()=>{history.push('pages')}}>To LandingPage</button>
    </div>
  );
}

export default Login;
