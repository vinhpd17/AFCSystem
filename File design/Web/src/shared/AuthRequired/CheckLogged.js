import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const CheckLogged=(OriginComponent)=>{
     function ExtendsComponent(){
        const logged =useSelector(({Auth})=>Auth.login.logged);
        return logged ? <Navigate to="/"/> : <OriginComponent/>
     }
     return ExtendsComponent;
}
export default CheckLogged; 
// mở rộng logic code cho component cta muốn  
//Login thì ko vào lại Login và Register