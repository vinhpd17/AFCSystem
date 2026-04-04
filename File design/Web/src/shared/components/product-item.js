import { getImageProduct } from "../ultils";
import { Link } from "react-router-dom";
const ProductItem = ({ item }) => {
  return (
    <div className="product-item">
      <div className="inner-item card">
      <Link to={`/ProductDetails-${item._id}`}>
        <img src={getImageProduct(item.url_image)} />
      </Link>
        
      <h4>
        <Link to={`/ProductDetails-${item._id}`}>{item.name}</Link>
      </h4>
      <p> Giá cũ: <del><span>{item.price_old}đ </span></del> </p>
      <p> Giá sale: <span>{item.price}đ</span> </p>
      </div>
    </div>
  );
};
export default ProductItem;
