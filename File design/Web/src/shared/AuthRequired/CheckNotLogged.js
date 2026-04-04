//Login roi moi vao dc Customer
//viet 1 hook trong function 
//=> su dung Navigate thay vi useNavigate
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const checkNotLogged = (OriginComponent)=>{
    function ExtendsComponent(){
        const logged = useSelector(({Auth})=>Auth.login.logged);
        return logged ?  <OriginComponent/> : <Navigate to="/"/> 
    }
    return ExtendsComponent;
}
export default checkNotLogged; 