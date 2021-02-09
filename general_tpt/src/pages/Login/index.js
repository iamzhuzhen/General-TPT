import './index.scss';
import { useHistory } from "react-router-dom";
import bgImage from '@assets/img/loginBg.jpeg' 
// components
import LoginForm from './components/LoginForm'


const Login = ()=> {
  const history = useHistory()
  return (
    <div className="LoginPage" style={{backgroundImage: `url(${bgImage})`}}>
      <LoginForm></LoginForm>

    </div>
  );
}

export default Login;
