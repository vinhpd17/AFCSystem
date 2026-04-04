import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux-setup/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./shared/components/Layout/Header";
import Menu from "./shared/components/Layout/Menu";

import Footer from "./shared/components/Layout/Footer";

import publicRoutes from "./routes";
import Banner from "./shared/components/Layout/Banner";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <div>
            <Header/>
            {/* Body */}
            <div id="homepage">
              <div className="container">
                <Banner/>
                <div id="mainPage" className="row">
                  <div id="main" className="col-lg-8 col-md-12 col-sm-12">
                    <Routes>
                      {
                        publicRoutes.map((route, index) =>
                          <Route key={index} path={route.path} element={<route.element />} />
                        )
                      }
                    </Routes>
                  </div>
                  <Menu/>
                </div>
              </div>
            </div>
            {/* End Body */}
            <Footer/>
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};
export default App;
