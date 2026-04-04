import React, { useState, useEffect } from "react";
import { getCategories, getOrigins } from "../../../services/Api";
import { Link } from "react-router-dom";
import { getImageProduct } from "../../ultils";

const Menu = () => {
  const [categories, setCategories] = useState([]);
  const [origins, setOrigins] = useState([]);
  useEffect(() => {
    getCategories({})
      .then(({ data }) => {
        setCategories(data.data.docs);
      });
    getOrigins({})
      .then(({ data }) => {
        setOrigins(data.data.docs);
      });
  }, []);

  return (
    <>
      <div id="menu-and-search" className="col-lg-4 col-md-12 col-sm-12">
        <div id="menu-categories">
          <h3>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#control_button_categories" aria-controls="control_button_categories" aria-expanded="false" aria-label="Toggle navigation">
              <a><i className="fa fa-bars" />Xuất Xứ Trái Cây</a>
            </button>
          </h3>
          <ul id="control_button_categories">
            {
              categories.map((category) =>
                <li id="menu-item-categories">
                  <Link to={`/Category-${category._id}`}> <img src={getImageProduct(category.url_image_category)} /> {category.name}</Link>
                </li>
              )
            }

          </ul>
        </div>
        <div id="menu-origin">
          <h3>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#control_button_origin" aria-controls="control_button_origin" aria-expanded="false" aria-label="Toggle navigation">
              <a><i className="fa fa-bars" />Nguồn Gốc Trái Cây</a>
            </button>
          </h3>
          <div id="control_button_origin" className="menu-origin-list">

            {
              origins.map((origin) =>
                <div className="item-origin">
                  <Link id="menu-item-origin" to={`/Origin-${origin._id}`}><img src={getImageProduct(origin.url_image_origin)} />{origin.name} </Link>
                </div>
              )
            }
          </div>
        </div>
      </div>

    </>
  )
}
export default Menu;
