import { useEffect, useState } from "react";
import { getOrdersCustomer } from "../../services/Api";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { canceledOrderCustomer } from "../../services/Api";
const Order = () => {
    const [orders, setOrders] = useState([]);
    const [sttOrder, setSttOrder] = useState("");
    const { id } = useParams();

    const clickCanceled = (e, orderId)=>{
        e.preventDefault(); 
        // eslint-disable-next-line no-restricted-globals
        const isConfirm = confirm("Bạn có muốn huỷ đơn hàng này không?");
        if(isConfirm){
            return canceledOrderCustomer(orderId)
                .then(({data})=> setSttOrder(orderId))
                .catch((error)=> console.log(error))
        }
        return false; 
    }

    useEffect(() => {
        getOrdersCustomer(id)
            //lưu orders vào State
            .then(({data}) => setOrders(data.orders)) 
            .catch((error) => console.log(error));
    }, [sttOrder]);
    return (
        <>
            {/*	Cart	*/}
            <div id="my-cart">
                <div className="row">
                    <div className="cart-nav-item col-lg-7 col-md-7 col-sm-12">Đơn hàng của bạn</div>
                    <div className="cart-nav-item col-lg-5 col-md-5 col-sm-12">Tổng tiền</div>
                </div>
                <form method="post">
                    {
                        orders.map((order, index) =>
                            <div className={`cart-item row ${order.status===1? "alert-success": ""} ${order.status===0? "alert-danger": ""}`}>
                                <div className="cart-thumb col-lg-7 col-md-7 col-sm-12">
                                    <h4>Đơn hàng đã mua vào ngày: <span className="text-secondary">{order.createdAt}</span></h4>
                                    <p>Mã Đơn (MĐ): {order._id}</p>
                                </div>
                                <div className="cart-price col-lg-2 col-md-2 col-sm-12"><b>{order.totalPrice} </b></div>
                                <div className="cart-quantity col-lg-3 col-md-3 col-sm-12">
                                    <Link to={`/OrderDetails-${order._id}`} className="btn btn-outline-dark mb-1">Chi tiết đơn hàng </Link>
                                    { order.status === 0  ? ( <button type="button" className="btn btn-danger mb-1">Đơn đã huỷ</button> ) : null }
                                    { order.status === 1 ? ( <button type="button" className="btn btn-success mb-1">Đơn đã giao</button> )  :null}
                                    { order.status === 2
                                        ? (
                                            <>
                                                <a onClick={(e)=>clickCanceled(e,order._id)} className="btn btn-outline-danger mb-1">Huỷ đơn</a>
                                                <button type="button" className="btn btn-outline-success mb-1">Đơn đang giao</button>
                                            </>
                                        )
                                        : null
                                    }
                                    
                                </div>
                            </div>
                        )
                    }
                    <div className="row">
                        <div className="cart-thumb col-lg-7 col-md-7 col-sm-12">
                            <button id="update-cart" className="btn btn-success" type="submit" name="sbm">Quay về
                                trang chủ</button>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-12">
                            <ul className="pagination mt-4">
                                <li className="page-item disabled">
                                    <span className="page-link">Trang trước</span>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item active" aria-current="page">
                                    <span className="page-link">2</span>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#">Trang sau</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
            {/*	End Cart	*/}
        </>
    )
}
export default Order 