import React, { useState, useEffect } from "react";
import { getProductsOrigin, getOrigin } from "../../services/Api";
import { useParams } from "react-router-dom";
import ProductItem from "../../shared/components/product-item";
const Origin = () => {
  const [products, setProducts] = useState([]);
  const [origin, setOrigin] = useState("");
  const [total, setTotal] = useState(0);
  const { id } = useParams();
  useEffect(() => {
    getOrigin(id, {})
      .then(({ data }) => {
        setOrigin(data.data.name);
      });

    getProductsOrigin(id, {})
      .then(({ data }) => {
        setTotal(data.data.pages.total);
        setProducts(data.data.docs);
      });
  }, [id]);

  return (
    <div>
      <div className="products">
        <h3>{origin} (hiện có {total} sản phẩm)</h3>

        <div className="product-list row row-cols-lg-3 row-cols-md-3 row-cols-1">

          {
            products.map((product) =>
              <ProductItem item={product} />
            )
          }

        </div>

      </div>
      <div id="pagination">
        <ul className="pagination">
          <li className="page-item"><a className="page-link" href="#">Trang trước</a></li>
          <li className="page-item active"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item"><a className="page-link" href="#">Trang sau</a></li>
        </ul>
      </div>
    </div>
  );
};
export default Origin;
