import Link from 'next/link';
import Image from 'next/image';
import SiriusAiLogo from "../../public/images/SiriusAiLogo.png";

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Image src={SiriusAiLogo} height="100" width="100" alt="Company Logo" className="img-fluid mb-3" />
                        <p>We bring in cutting edge technical know how and industry specific domain expertise.</p>
                    </div>

                    <div className="col-md-4">
                        <h5>Contact</h5>
                        <ul className="list-unstyled">
                            <li>New York: 136 Madison Ave, 6th floor, New York, NY 10016, United States</li>
                            <li>India: SiriusAI, 91 Springboards, 2nd Floor, Augusta Point, Golf Course Road, Gurugram, Haryana, 122002</li>
                            <li>contactus@siriusai.com +1 (123) 456-7890</li>
                            <li>Monday—Friday 8am — 6pm</li>
                        </ul>
                    </div>

                    <div className="col-md-4">
                        <h5>Menu</h5>
                        <ul className="list-unstyled">
                            <li><a href="/services" className="text-white">Our Services</a></li>
                            <li><a href="/expertise" className="text-white">Our Industry Expertise</a></li>
                            <li><a href="/about" className="text-white">About</a></li>
                            <li><a href="/contact" className="text-white">Contact</a></li>
                            <li><a href="/fundamental" className="text-white">Fundamentals</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

