'use client';

import Link from 'next/link';
import Image from 'next/image';
import SiriusAiLogo from "../../public/images/SiriusAiLogo.png";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Logo_Main from '../../public/images/Logo_Main.svg';
import "../../src/style/style.scss";

// Define the DropdownState type
interface DropdownState {
  services: boolean;
  expertise: boolean;
  contact: boolean;
  fundamental: boolean;
  about: boolean;
}

const Header: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState<DropdownState>({
    services: false,
    expertise: false,
    contact: false,
    fundamental: false,
    about: false
  });

  const handleToggle = (section: keyof DropdownState) => {
    setShowDropdown(prevState => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  const handleMouseEnter = (section: keyof DropdownState) => {
    setShowDropdown(prevState => ({
      ...prevState,
      [section]: true
    }));
  };

  const handleMouseLeave = (section: keyof DropdownState) => {
    setShowDropdown(prevState => ({
      ...prevState,
      [section]: false
    }));
  };

  return (
    <div className="header bg-dark">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="Logomain" href="#">
            <Image className="LogoMain" src={SiriusAiLogo} alt="Sirius AI Logo" width={100} height={100}/>
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item dropdown"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={() => handleMouseLeave('services')}>
                <a className="nav-link" href="/services">
                  Our Services
                  <span className={`arrow ${showDropdown.services ? 'up' : 'down'}`}></span>
                </a>
                <ul className={`dropdown-menu ${showDropdown.services ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/services">AI Consulting</a></li>
                  <li><a className="dropdown-item" href="/services">AI Solutions Factory</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown"
                onMouseEnter={() => handleMouseEnter('expertise')}
                onMouseLeave={() => handleMouseLeave('expertise')}>
                <a className="nav-link" href="/expertise">
                  Our Industry Expertise
                  <span className={`arrow ${showDropdown.expertise ? 'up' : 'down'}`}></span>
                </a>
                <ul className={`dropdown-menu ${showDropdown.expertise ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/expertise">AI Solutions</a></li>
                  <li><a className="dropdown-item" href="/expertise">Customer Relations</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown"
                onMouseEnter={() => handleMouseEnter('expertise')}
                onMouseLeave={() => handleMouseLeave('expertise')}>
                <a className="nav-link" href="/contact">
                  Contact
                  <span className={`arrow ${showDropdown.contact ? 'up' : 'down'}`}></span>
                </a>
                <ul className={`dropdown-menu ${showDropdown.contact ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/contact">Through Email</a></li>
                  <li><a className="dropdown-item" href="/contact">Through Telephone</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown"
                onMouseEnter={() => handleMouseEnter('fundamental')}
                onMouseLeave={() => handleMouseLeave('fundamental')}>
                <a className="nav-link" href="/fundamental">
                  Fundamentals
                  <span className={`arrow ${showDropdown.contact ? 'up' : 'down'}`}></span>
                </a>
                <ul className={`dropdown-menu ${showDropdown.contact ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/fundamental">Fundamental 1</a></li>
                  <li><a className="dropdown-item" href="/fundamental">Fundamental 2</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown"
                onMouseEnter={() => handleMouseEnter('contact')}
                onMouseLeave={() => handleMouseLeave('contact')}>
                <a className="nav-link" href="/contact">
                  Contact
                  <span className={`arrow ${showDropdown.contact ? 'up' : 'down'}`}></span>
                </a>
                <ul className={`dropdown-menu ${showDropdown.contact ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/contact">Email Us</a></li>
                  <li><a className="dropdown-item" href="/contact">Call Us</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* CSS for arrow */}
      <style jsx>{`
        .header {
          transition: top 0.3s;
          position: fixed;
          width: 100%;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
        }

        .header.hidden {
          top: -60px; /* Adjust based on header height */
        }

        .header.visible {
          top: 0;
        }

        /* Logo Positioning */
        .logo {
          position: relative;
          margin-left: -100px; /* Adjust this value to move logo to the left */
        }

        /* Arrow styles */
        .arrow {
          margin-left: 5px;
          display: inline-block;
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 5px solid white;
          transition: transform 0.3s;
        }

        .arrow.down {
          transform: rotate(0deg);
        }

        .arrow.up {
          transform: rotate(180deg);
        }

        /* Dropdown menu */
        .dropdown-menu {
          display: none;
          background-color: #333;
          color: white;
          border-radius: 8px;
        }

        .dropdown-menu.show {
          display: block;
          padding: 10px;
        }

        .dropdown-menu .dropdown-item {
          color: white;
          padding: 10px;
          transition: background-color 0.3s ease;
        }

        .dropdown-menu .dropdown-item:hover {
          background-color: #555;
        }

        /* Navbar links styles */
        .nav-link {
          color: white;
          font-weight: normal;
          text-decoration: none;
          transition: color 0.3s, background-color 0.3s, font-weight 0.3s;
        }

        /* Bold on hover */
        .nav-link:hover {
          color: white;
          font-weight: bold;
          background-color: transparent;
        }

        /* Arrow hover effect */
        .nav-link:hover .arrow {
          border-top-color: white;
        }

        .Logo {
        postion: absolute;
        }

        /* Show dropdown on hover */
        .nav-item.dropdown:hover .dropdown-menu {
          display: block;
        }
      `}</style>

    </div>
  );
}

export default Header;

