const Banner = () => {
    return (
        <>
            <div>
                <div id="homepage-menu" className="row">
                    <div id="banner-left" className="col-lg-3 col-md-0 col-sm-12">
                        <div id="banner-left-items">
                            <h4>Sinh viên thực hiện:</h4>
                            <p><i className="fas fa-user-graduate" />Đỗ Văn Minh - 20195093</p>
                            <p><i className="fas fa-user-graduate" />Vũ Minh Tân - 20195170</p>
                            <p><i className="fas fa-user-graduate" />N.T.H Duy - 20194989</p>
                            <h4>Giảng Viên Hướng Dẫn:</h4>
                            <p><i className="fas fa-user-tie" />TS. Lý Hoàng Hiệp</p>
                        </div>
                    </div>
                    <div id="slider" className="col-lg-6 col-md-12 col-sm-12">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                                <li data-target="#carouselExampleIndicators" data-slide-to={3} />
                                <li data-target="#carouselExampleIndicators" data-slide-to={4} />
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="./images/slider_n_2.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="./images/slider_n_6.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="./images/slider_n_8.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="./images/slider_n_4.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="./images/slider_n_7.jpg" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="sr-only">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="sr-only">Next</span>
                            </button>
                        </div>
                    </div>
                    <div id="banner-right" className="col-lg-3 col-md-3 col-sm-12">
                        <div className="banner-right-item banner-hover">
                            <a href="#"> <img className="img-fluid" src="./images/banner_r_1.jpg" /> </a>
                        </div>
                        <div className="banner-right-item banner-hover">
                            <a href="#"> <img className="img-fluid" src="./images/banner_r_2.jpg" /> </a>
                        </div>
                    </div>
                </div>
                <div id="banner-bottom" className="row">
                    <div className="banner-bottom-item banner-hover col-lg-4 col-md-0 col-sm-12">
                        <a href="#"> <img className="img-fluid" src="./images/banner_b_1.jpg" /> </a>
                    </div>
                    <div className="banner-bottom-item banner-hover col-lg-4 col-md-4 col-sm-12">
                        <a href="#"> <img className="img-fluid" src="./images/banner_b_2.jpg" /> </a>
                    </div>
                    <div className="banner-bottom-item banner-hover col-lg-4 col-md-4 col-sm-12">
                        <a href="#"> <img className="img-fluid" src="./images/banner_b_3.jpg" /> </a>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Banner;
