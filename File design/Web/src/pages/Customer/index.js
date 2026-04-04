import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCustomer } from "../../services/Api";
import { updateSuccess } from "../../redux-setup/reducers/auth";

const Customer = ()=>{
    const customer = useSelector(({Auth})=>Auth.login.currentCustomer)
    const [inputsCustomer,setInputsCustomer] = useState(customer);
    const [alertUpdate,setAlertUpdate]=useState(false);
    const [alertCls, setAlertCls]=useState("");
    const dispatch=useDispatch();
    const changeInputsCustomer=(e)=>{
      const {name,value}=e.target;
      return setInputsCustomer({...inputsCustomer,[name]:value});
    }
    const clickUpdate=(e)=>{
      e.preventDefault();
      updateCustomer(inputsCustomer)
      .then(({data})=>{                  
        //Khi nó vào đến then có nghĩa là database đã đc update rồi
        //đồng bộ với store, lúc này inputsCustomer là State cũ, 
        // nhưng đc update 3 trường thông tin 
        dispatch(updateSuccess(inputsCustomer));  
        setAlertUpdate("Cap nhat thong tin thanh cong");
        setAlertCls("success")

      })
      .catch(({response})=>{
        if(response.data==="Phone number exists")
          setAlertUpdate("So dien thoai da ton tai");
          setAlertCls("danger");
      })
    }
    return (
        <>
            {/*	Register Form	*/}
            <div id="customer">
                { alertUpdate && (<div className={`alert alert-${alertCls} text-center`}>{alertUpdate}</div>)
                }
                <h3 className="text-center">Thông tin chi tiết </h3>
                <form method="post">
                    <div className="row">
                        <div id="customer-name" className="col-lg-6 col-md-6 col-sm-12">
                            <input placeholder="Họ và tên (bắt buộc)" type="text" name="fullName" className="form-control" required
                                onChange={changeInputsCustomer} value={inputsCustomer.fullName || ""} />
                        </div>
                        <div id="customer-pass" className="col-lg-6 col-md-6 col-sm-12">
                            <input placeholder="Mật khẩu (bắt buộc)" type="text" name="password" className="form-control" required
                                disabled onChange={changeInputsCustomer} value={inputsCustomer.password || ""} />
                        </div>
                        <div id="customer-mail" className="col-lg-6 col-md-6 col-sm-12">
                            <input placeholder="Email (bắt buộc)" type="text" name="email" className="form-control" required
                                disabled onChange={changeInputsCustomer} value={inputsCustomer.email || ""} />
                        </div>
                        <div id="customer-phone" className="col-lg-6 col-md-6 col-sm-12">
                            <input placeholder="Số điện thoại (bắt buộc)" type="text" name="phone" className="form-control" required
                                onChange={changeInputsCustomer} value={inputsCustomer.phone || ""} />
                        </div>
                        <div id="customer-add" className="col-lg-12 col-md-12 col-sm-12">
                            <input placeholder="Địa chỉ nhà riêng hoặc cơ quan (bắt buộc)" type="text" name="address" className="form-control"
                                required onChange={changeInputsCustomer} value={inputsCustomer.address || ""} />
                        </div>
                    </div>
                </form>
                <div className="row">
                    <div className="by-now col-lg-6 col-md-6 col-sm-12">
                        <a onClick={clickUpdate} href="#"> <b>Cập nhật ngay</b> </a>
                    </div>
                    <div className="by-now col-lg-6 col-md-6 col-sm-12">
                        <a href="#"> <b>Quay về trang chủ</b> </a>
                    </div>
                </div>
            </div>
            {/*	End Register Form	*/}
        </>
    )
}
export default Customer