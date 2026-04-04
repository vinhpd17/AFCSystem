
import Home from "../pages/Home";
import Category from "../pages/Category";
import ProductDetails from "../pages/ProductDetails";
import Search from "../pages/Search";
import Cart from "../pages/Cart";
import Success from "../pages/Success";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Customer from "../pages/Customer";
import NotFound from "../pages/NotFound";
import { CheckLogged, CheckNotLogged } from "../shared/AuthRequired";
import Order from "../pages/Order";
import OrderDetails from "../pages/OrderDetails";
import Origin from "../pages/Origin";

const publicRoutes=[
    {
        path:"/", element:Home,
    },
    {
        path:"/Category-:id", element:Category,
    },
    {
        path:"/Origin-:id", element:Origin,
    },
    {
        path:"/productDetails-:id", element:ProductDetails,
    },
    {
        path:"/Search", element:Search,
    },
    {
        path:"/Cart", element:Cart,
    },
    {
        path:"/Success", element:Success,
    },
    {
        path:"/Login", element:CheckLogged(Login),
    },
    {
        path:"/Register", element:CheckLogged(Register),
    },
    {
        path:"/Customer", element:CheckNotLogged(Customer),
    },
    {
        path:"/Order-:id", element:CheckNotLogged(Order),
    },
    {
        path:"/OrderDetails-:id", element:CheckNotLogged(OrderDetails),
    },
    {
        path:"*", element:NotFound,
    },
];
export default publicRoutes;