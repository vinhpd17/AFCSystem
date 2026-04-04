import React, { useState, useEffect } from "react";
import { getProducts } from "../../services/Api";
import ProductItem from "../../shared/components/product-item";
const Home = () => {
  const [latestProducts, setLatestProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  useEffect(() => {
    // Featured
    getProducts({
      params: {
        limit: 6,
        is_featured: true,
      }
    }).then(({ data }) => {
      setFeaturedProducts(data.data.docs);
    });

    // Latest
    getProducts({
      params: {
        limit: 6,
        is_new: true,
      }
    }).then(({ data }) => {
      setLatestProducts(data.data.docs);
    });
  }, []);
  return (
    <>
      <div>
        {/* Product New */}
        <div className="products">
          <h3>Hoa quả Mới</h3>
          <div className="product-list row row-cols-lg-3 row-cols-md-3 row-cols-1">
            {
              featuredProducts.map((product) =>
                <ProductItem item={product} />
              )
            }
          </div>
        </div>
        {/* End Product New */}

        {/* Product Featured */}
        <div className="products">
          <h3>Hoa quả bán chạy</h3>

          <div className="product-list row row-cols-lg-3 row-cols-md-3 row-cols-1">
            {
              latestProducts.map((product) =>
                <ProductItem item={product} />
              )
            }

          </div>
        </div>
        {/* End Product Featured*/}
      </div>

    </>
  );
};
export default Home;
