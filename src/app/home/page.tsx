'use client';
import React from "react";
// import HomeRight from "./home-right.png";
import ExpertDesign from "./expert-design.png";
// import KanhaG from "./kanha-g.jpeg";
// import Glow from "./glow.png";
// import { Swiper, SwiperSlide, } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";
// import { Pagination, } from "swiper/modules";
import "../../style/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useRouter } from 'next/navigation';
// import Carousel from "../../components/Carousel";
import Service_page from '../../../public/images/Service_page.webp';
import AiSolutionsFactory from '../../../public/images/AiSolutionsFactory.webp';
import AiImplementationExperience from '../../../public/images/AiImplementationExperience.gif';
import { useState } from "react";
import SiriusAiLogo from "../../../public/images/SiriusAiLogo.png";
import Sanjay from '../../../public/images/Sanjay.webp';
import AbhinavImg from '../../../public/images/AbhinavImg.webp';
import AbhinavAnand from '../../../public/images/AbhinavAnand.jpeg';
import Narendra from '../../../public/images/Narendra.webp';
import Thomas from '../../../public/images/Thomas.jpeg';
import Tommy from '../../../public/images/Tommy.jpeg';
import Ziv from '../../../public/images/Ziv.jpeg';
import Prateek from '../../../public/images/Prateek.jpg';
import Anupam from '../../../public/images/Anupam.jpeg';
import Gaurav from '../../../public/images/Gaurav.jpg';
import Vijay from '../../../public/images/Vijay.png';
import Divyank from '../../../public/images/Divyank.jpg';
import CommonMeetTeamCard from '../../components/CommonMeetTeamCard';
import Slide1 from "../../../public/images/Slide1.jpg";
import HomeMainImg from '../../../public/images/HomeMainImg.gif';
import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Home: React.FC = () => {

	const [showMore, setShowMore] = useState(false);
	const router = useRouter();

	// All team members data
	const teamMembers = [
		{ title: "Sanjay Ojha", subtitle: "CEO & Co-Founder", imgSrc: Sanjay, imgAlt: "CEO's Image" },
		{ title: "Narendra Mulani", subtitle: "Chairman & Co-Founder", imgSrc: Narendra, imgAlt: "Chairman's Image" },
		{ title: "Abhinav Vij", subtitle: "Chief Client Officer & Co-Founder", imgSrc: AbhinavImg, imgAlt: "Co-Founder's Image" },
		{ title: "Ziv Bursztyn", subtitle: "Senior Advisor – Wealth & Asset Management", imgSrc: Ziv, imgAlt: "Ziv's Image" },
		{ title: "Tommy Marshall", subtitle: "Sales & GTM Advisor – Financial Services", imgSrc: Tommy, imgAlt: "Tommy's Image" },
		{ title: "Thomas Oehmler", subtitle: "Senior Advisor – Wealth Management", imgSrc: Thomas, imgAlt: "Thomas Image" },
		{ title: "Abhinav Anand", subtitle: "Strategic Advisor – Fintech", imgSrc: AbhinavAnand, imgAlt: "Abhinav's Image" },
		{ title: "Anupam Shringi", subtitle: "AI Consulting Lead", imgSrc: Anupam, imgAlt: "Anupam's Image" },
		{ title: "Divyank Sinha", subtitle: "Head of AI Delivery, ESG Lead", imgSrc: Divyank, imgAlt: "Divyank's Image" },
		{ title: "Vijay Saini", subtitle: "Innovation Labs Lead", imgSrc: Vijay, imgAlt: "Vijay's Image" },
		{ title: "Gaurav Pande", subtitle: "Data Ecosystem, Client Value Creation", imgSrc: Gaurav, imgAlt: "Gaurav's Image" },
		{ title: "Prateek Agarwal", subtitle: "Data Platform & Engineering Lead", imgSrc: Prateek, imgAlt: "Prateek's Image" },
	];

	const visibleTeamMembers = showMore ? teamMembers : teamMembers.slice(0, 3);

	const handleSlideClick = (slideIndex: number) => {
		switch (slideIndex) {
		  case 1:
			window.location.href = 'https://calendly.com/contactus-siriusai/konversai-demo';
			break;
		  case 2:
			window.location.href = 'www.google.com';
			case 3:
			window.location.href = 'www.youtube.com';
			case 4:
				window.location.href = 'www.siriusai.com';
			case 5:
			window.location.href = 'https://www.linkedin.com/company/sirius-ai-inc/';
			break;
		}
	  };

	const handleServiceButtonClick = () => {
		router.push("/services");
	}

	const handleExpertiseButtonClick = () => {
		router.push("/expertise");
	}

	const handleFundamentalButtonClick = () => {
		router.push("/fundamental");
	}

	return (
		<>

		<Header />
		<Swiper className="swiper-pagination-bullet"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>                   
			<Image
				src={Slide1}
				className="swiper-slide img"
				alt="First slide"
			/>
		{/* <button className="common-button primary-btn-slider" onClick={() => handleSlideClick(1)}>BOOK A DEMO</button> */}
		</SwiperSlide>
        <SwiperSlide>                   
			<Image
				src={Slide1}
				className="swiper-slide img"
				alt="First slide"
			/>
		{/* <button className="common-button primary-btn-slider" onClick={() => handleSlideClick(2)}>BOOK A DEMO</button> */}
		</SwiperSlide>
		<SwiperSlide>                   
			<Image
				src={Slide1}
				className="swiper-slide img"
				alt="First slide"
			/>
			  {/* <button className="common-button primary-btn-slider" onClick={() => handleSlideClick(3)}>BOOK A DEMO</button> */}
		</SwiperSlide>
		<SwiperSlide>                   
			<Image
				src={Slide1}
				className="swiper-slide img"
				alt="First slide"
			/>
		{/* <button className="common-button primary-btn-slider" onClick={() => handleSlideClick(4)}>BOOK A DEMO</button> */}
		</SwiperSlide>
		<SwiperSlide> 
             
			<Image
				src={Slide1}
				className="swiper-slide imge"
				alt="First slide"
			/>
		{/* <button className="common-button primary-btn" onClick={() => handleSlideClick(5)}>BOOK A DEMO</button> */}
		</SwiperSlide>	
      </Swiper>
		<div className="main-demo-page">
			<section className="home-section">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="home-item-left center-items">
								<h3>Simplifying AI and Data for Financial Services</h3>
							</div>
						</div>
						<div className="col-md-6">
							<div className="home-item-right ">
								<Image src={HomeMainImg} alt="" className="img-fluid" />
							</div>
						</div>
					</div>
				</div>
			</section>


			<section className="services-section">
				<div className="container">
					<div className="common-heading">
						<h2>Our Services</h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<div className="service-item">
								<h3>AI Consulting</h3>
								<p>Uncover valuable insights buried within your data … Identify patterns and opportunities to optimize decision-making</p>
								<div className="service-item-inner">
									<p>Outcome Focused and Tailor Made for your Specific Use Case</p>
									<Image src={Service_page} alt="" className="service-inner-img" />
								</div>
								<button className="common-button primary-btn" onClick={handleServiceButtonClick}>Know More <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg></button>
							</div>
						</div>
						<div className="col-md-6">
							<div className="service-item">
								<h3>AI Solutions Factory</h3>
								<p>Leverage accelerators to rapidly deploy and customize to your data to drive outcomes across Front, Mid & Back Office</p>
								<div className="service-item-inner">
									<p>10+ & expanding…Deploy Rapidly and gain accelerated benefits</p>
									<Image src={AiSolutionsFactory} alt="" className="service-inner-img" />
								</div>
								<button className="common-button primary-btn" onClick={handleServiceButtonClick}>Know More <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg></button>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="industry-expertise">
				<div className="container">
					<div className="common-heading">
						<h2>Our Industry Expertise</h2>
					</div>
					<div className="row g-4">
						<div className="col-md-6">
							<div className="expertise-card">
								<h3>Retail Banking</h3>
								<p className="card-sub-heading">Drive Revenue Growth, Enhancing Customer Experience And Manage Risk</p>
								<h4>Examples</h4>
								<ul>
									<li>Customer & Marketing AI</li>
									<li>Fraud & Financial Crime</li>
									<li>Digital Journeys and Analytics</li>
									<li>Risk & Regulatory</li>
								</ul>
								<button className="common-button primary-btn" onClick={handleExpertiseButtonClick}>Get Started <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg></button>
								<Image src={ExpertDesign} alt="" className="expert-design" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="expertise-card">
								<h3>Commercial Banking</h3>
								<p className="card-sub-heading">Utilizing AI To Strengthen Relationship Management</p>
								<h4>Examples</h4>
								<ul>
									<li>AI Powered Relationship Manager – Embed intelligence in advisory</li>
									<li>Corporate Banking Client Attrition</li>

								</ul>
								<button className="common-button primary-btn" onClick={handleExpertiseButtonClick}>Get Started<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg></button>
								<Image src={ExpertDesign} alt="" className="expert-design" />


							</div>
						</div>
						<div className="col-md-6">
							<div className="expertise-card">
								<h3>Wealth & Asset Management</h3>
								<p className="card-sub-heading">Powering Sales And Distribution Using AI</p>
								<h4>Examples</h4>
								<ul>
									<li>Sales & Distribution Effectiveness</li>
									<li>Client Insights</li>
									<li>Improved Client Experience</li>
									<li>Conduct & Regulatory Risk</li>
								</ul>
								<button className="common-button primary-btn" onClick={handleExpertiseButtonClick}>Get Started<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg></button>
								<Image src={ExpertDesign} alt="" className="expert-design" />

							</div>
						</div>
						<div className="col-md-6">
							<div className="expertise-card">
								<h3>Payments</h3>
								<p className="card-sub-heading">Insight Driven AI Consulting For Entire Payment Value Chain</p>
								<h4>Examples</h4>
								<ul>
									<li>Issuer Insights</li>
									<li>Network Provider Insights</li>
									<li>Fintech Industry Trends</li>
									<li>Acquirer & Merchant Insights</li>
								</ul>
								<button className="common-button primary-btn" onClick={handleExpertiseButtonClick}>Get Started<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg></button>
								<Image src={ExpertDesign} alt="" className="expert-design" />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="capabilities-section">
				<div className="container">
					<div className="common-heading">
						<h2>Fundamental Capabilities</h2>
					</div>
					<div className="row g-4">
						<div className="col-md-4">
							<div className="capabilities-card">
								<h3>Generative AI</h3>
								<p className="card-sub-heading">“Generative AI is the new UI” – transforms user experiences and drives innovation with advanced GenAI-driven solutions</p>
								<button className="common-button primary-btn" onClick={handleFundamentalButtonClick}>Know More <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg></button>
							</div>
						</div>
						<div className="col-md-4">
							<div className="capabilities-card">
								<h3>Core AI</h3>
								<p className="card-sub-heading">Leverages machine learning and data analytics to automate processes, enhance decision-making, and provide valuable insights across diverse</p>
								<button className="common-button primary-btn" onClick={handleFundamentalButtonClick}>Know More <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg></button>

							</div>
						</div>
						<div className="col-md-4">
							<div className="capabilities-card">
								<h3>Data Brain</h3>
								<p className="card-sub-heading">Data Brain integrates a rich universe of external data and insights to elevate decision-making and drive superior outcomes for analytics and decision-making</p>
								<button className="common-button primary-btn" onClick={handleFundamentalButtonClick}>Know More <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg></button>

							</div>
						</div>
						<div className="col-md-4">
							<div className="capabilities-card">
								<h3>Data Engineering</h3>
								<p className="card-sub-heading">Focuses on designing, building, and maintaining robust data pipelines and architectures to ensure efficient data flow and accessibility for analytics and decision-making</p>
								<button className="common-button primary-btn" onClick={handleFundamentalButtonClick}>Know More <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg></button>

							</div>
						</div>
						<div className="col-md-4">
							<div className="capabilities-card">
								<h3>AI Ops</h3>
								<p className="card-sub-heading">Ensures seamless deployment of AI models in production systems, guaranteeing scalability, reliability, and optimal performance in real-world applications.</p>
								<button className="common-button primary-btn" onClick={handleFundamentalButtonClick}>Know More <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg></button>
							</div>
						</div>
						<div className="col-md-4">
							<div className="capabilities-card center-items">
								<h3 className="text-center">Generative AI Chatbot AI Services For Future </h3>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="glow-section">
				<div className="container">
					<div className="row align-items-center ">
					</div>
				</div>
			</section>

			<section className="glow-section">
				<div className="container">
					<div className="row align-items-center ">
						<div className="col-md-5 " style={{ overflow: "hidden" }}>
							<Image src={AiImplementationExperience} alt="" className="img-fluid" />
						</div>
						<div className="col-md-7">
							<div className="glow-content">
								<h2>Our Team Has Deep AI Implementation Experience</h2>
								<p className="sub-heading">Our team has multiple years of experience and expertise in delivering hundreds of client transformation projects on AI and Data across the globe.</p>
							</div>

							<ul>
								<li><span>100+</span>AI Transformation Programs</li>
								<li><span>70 +</span>Global Clients</li>
								<li><span>10%</span>of market participation</li>
								<li><span>$250MM</span>industry activity</li>
							</ul>


						</div>
					</div>
				</div>

			</section>

			<section className="our-team">
				<div className="container ">
					<div className="common-heading text-center">
						<h2>Meet Our Team</h2>
					</div>

					<div className="row">
						{visibleTeamMembers.map((member, index) => (
							<CommonMeetTeamCard
								key={index}
								title={member.title}
								subtitle={member.subtitle}
								imgSrc={member.imgSrc}
								imgAlt={member.imgAlt}
							/>
						))}
					</div>

					<button className="common-button primary-outline m-auto mt-3" onClick={() => setShowMore(!showMore)}>
						{showMore ? "Show Less ->" : "Show More ->"}
					</button>


				</div>
			</section >
			<footer className="footer text-white">
				<div className="container">
					<div className="row">
						<div className="col-md-5">
							<Image src={SiriusAiLogo} height="100" width="100" alt="Company Logo" className="img-fluid mb-3" />
							<p className="mt-3 pe-5">We bring in cutting edge technical know how and industry specific domain expertise.</p>
						</div>
						<div className="col-md-4">
							<h3 className="footer-tittle">Contact</h3>
							<p>     New York: 136 Madison Ave, 6th floor<br />
								New York, NY 10022, United States<br /><br />
								India: SiriusAI, 91 Springboards, 2nd Floor,<br />
								Augusta Point, Golf Course Road, Gurugram,<br />
								Haryana, 122002<br /><br />
								contact@siriusai.com<br />
								+1 (123) 456-7890

								<br /><br />
								Monday—Friday<br />
								8am — 6pm</p>
						</div>
						<div className="col-md-3">
							<h3 className="footer-tittle">Menu</h3>
							<ul className="list-unstyled mt-3">
								<li><Link href="/services" className="text-white" style={{ color: "white", textDecoration: "none" }}>Our Services</Link></li>
								<li><Link href="/expertise" className="text-white" style={{ color: "white", textDecoration: "none" }}>Our Industry Expertise</Link></li>
								<li><Link href="/fundamental" className="text-white" style={{ color: "white", textDecoration: "none" }}>Fundamenatals</Link></li>
								<li><Link href="/about" className="text-white" style={{ color: "white", textDecoration: "none" }}>About</Link></li>
								<li><Link href="/contact" className="text-white" style={{ color: "white", textDecoration: "none" }}>Contact</Link></li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		</div >
		</>
	);
};
export default Home;

 



