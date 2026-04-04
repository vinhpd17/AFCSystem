import axios from "axios";
import { jwtDecode} from "jwt-decode" 
import { BASE_API } from "../shared/constants/app";
import { store } from "../redux-setup/store";
import { loggedOut } from "../redux-setup/reducers/auth";

const Http = axios.create({
    baseURL: BASE_API,
});

// Add a request interceptor
Http.interceptors.request.use(function (config) {
    // Do something before request is sent
    //Tat ca nhung gi muon sua lai=> config. 
    const Auth = store.getState().Auth; // sử dụng outSide
    const token = Auth.login.currentCustomer?.accessToken 
    if(token){
        const decoded = jwtDecode(token);
        console.log(decoded);
        //thoi giang song < time hien tai
        if(decoded.exp < new Date()/1000){ 
            store.dispatch(loggedOut());
        }
    }

    // console.log(token); 
    config.headers["token"] = `Bearer ${token}`;  
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
export default Http;