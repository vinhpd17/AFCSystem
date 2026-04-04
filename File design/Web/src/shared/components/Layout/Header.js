import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loggedOut } from "../../../redux-setup/reducers/auth";

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const changeKeyword = (e) => setKeyword(e.target.value);
  const clickSearch = (e) => {
    e.preventDefault();
    return navigate(`/Search?keyword=${keyword}`);
  }
  const totalCart = useSelector(({ Cart }) => Cart.items.reduce((total, item) => total + item.qty, 0));
  const logged = useSelector(({ Auth }) => Auth.login.logged);
  const customer = useSelector(({ Auth }) => Auth.login.currentCustomer);
  const clickLoggedOut = (e) => {
    e.preventDefault();
    dispatch(loggedOut());
    return navigate("/Login");
  }
  return (
    <>
      <div>
        {/* Header */}
        <div id="global-banner">
          <a href="#"> <img className="img-fluid" src="./images/global-banner.png" /> </a>
        </div>
        <div id="header-top">
          <div className="container">
            <div className="row">
              <div id="header-top-left" className="col-lg-3 col-md-3 col-sm-12">
                <a href="#"><i className="fa fa-map-marker"> </i> Hệ thống siêu thị </a>
              </div>
              <div id="header-top-right" className="col-lg-9 col-md-9 col-sm-12">
                <a href="#"><i className="fa fa-newspaper"> </i> Tin tức </a>
                <a href="#"><i className="fa fa-user"> </i> Tuyển dụng </a>
                <a href="#"><i className="fa fa-file-alt"> </i> Tra cứu hoá đơn VAT </a>
                <a href="#"><i className="fa fa-question-circle"> </i> Hỗ trợ </a>
                <a href="#"><i className="fa fa-headphones"> </i> Liên hệ </a>
              </div>
            </div>
          </div>
        </div>
        <div id="header-main">
          <div className="container">
            <div className="row">
              <div id="logo" className="col-lg-3 col-md-0 col-sm-12">
                <h1> <Link to="/"> <img src="./images/bk.png" /> </Link> </h1>
              </div>
              <div id="search" className="col-lg-5 col-md-7 col-sm-12">
                <form method="post">
                  <input onChange={changeKeyword} placeholder="Tìm kiếm" type="text" name="search" />
                  <button onClick={clickSearch} type="submit" name="submit">
                    <i className="fa fa-search" />
                  </button>
                </form>
              </div>
              <div id="header-main-right" className="col-lg-4 col-md-5 col-sm-12">
                <div id="follow">
                  <Link to={`/Order-${customer?._id}`} >Theo dõi <br /> đơn hàng</Link>
                </div>
                <div id="user">
                  {
                    logged
                      ? (
                        <>
                          <Link class="mr-2" to="/Customer">{customer?.email}</Link><br/>
                          <a onClick={clickLoggedOut} href="#">Đăng xuất</a>
                        </>
                      )
                      : (
                        <>
                          <Link to="/Login">Đăng nhập</Link> <br />
                          <Link to="/Register">Đăng ký</Link>
                        </>
                      )
                  }
                </div>
                <Link id="cart" to="/Cart"> <span>{totalCart}</span> </Link>
              </div>
            </div>
          </div>
        </div>
        <div id="header-bottom">
          <div className="container">
            <div className="row justify-content-end">
              <div id="header-bottom-right" className="col-lg-10 col-md-10 col-sm-12">
                <a href="#">DEAL HOT</a>
                <a href="#">Khuyến mãi</a>
                <a href="#">Sản phẩm đã xem</a>
                <a href="#">Gọi đặt mua: <i>1900.6619</i></a>
              </div>
            </div>
          </div>
        </div>
        {/* End Header */}
      </div>

    </>
  )

}
export default Header; 