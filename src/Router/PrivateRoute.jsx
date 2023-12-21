import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const PrivateRoute = ({children}) => {
  const {user} = useAuth();
  const navigate = useNavigate()
  console.log(user)

  if(user){
    return children
  }
  return navigate('/login')
};

export default PrivateRoute;