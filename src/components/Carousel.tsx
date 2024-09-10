import Image from 'next/image';
import Narendra from '../../public/images/Narendra.webp';
import Tommy from '../../public/images/Tommy.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slide1 from "../../public/images/Slide1.jpg";

const Carousel = () => {
    return (
        <div className="section-home">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <Image
                        src={Slide1}
                        className="banner-image"
                        alt="First slide"
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First Slide Title</h5>
                        <p>First Slide Description</p>
                        <a href="www.google.com" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-primary">
                                Click Me
                            </button>
                        </a>
                    </div>
                </div>
                <div className="carousel-item">
                <Image
                        src={Slide1}
                        className="banner-image"
                        alt="First slide"
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second Slide Title</h5>
                        <p>Second Slide Description</p>
                    </div>
                </div>
                <div className="carousel-item">
                <Image
                        src={Slide1}
                        className="banner-image"
                        alt="First slide"
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third Slide Title</h5>
                        <p>Third Slide Description</p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </a>
        </div>
        </div>
    );
}

export default Carousel;

    

