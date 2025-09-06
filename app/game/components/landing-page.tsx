import Image from "next/image";
import { FaCloud } from "react-icons/fa";
import { FaBolt, FaLocationDot, FaRegEnvelope, FaUserGroup } from "react-icons/fa6";
import avatar2 from "@/public/avatar2.jpg";
import { BsTelephone } from "react-icons/bs";
import HeroImage from "./ui/hero-image";
import BenefitsList from "./ui/benefits-list";
import CybersecurityShield from "./ui/cybersecurity-shield";
import TestimonialAvatarAnomaly from "./ui/testimonial-avatar";
import GetStartedButton from "./ui/get-started-button";

function LandingPage() {
    return (
        <div className="flex flex-col justify-between">
            <header className="bg-base-100 shadow-sm w-full fixed top-0 z-50">
                <div className="navbar max-w-7xl mx-auto px-4">
                    {/* Logo */}
                    <div className="flex-1">
                        <p className="text-xl" id="navbar-logo">The Normality</p>
                    </div>

                    {/* Desktop Navlinks */}
                    <div className="hidden md:flex flex-none">
                        <ul className="flex-none inline-flex space-x-6" id="navLinks">
                            <li className="cursor-pointer hover:text-primary transition-colors duration-200 px-4" id="homeLink">Home</li>
                            <li className="cursor-pointer hover:text-primary transition-colors duration-200 px-4">About</li>
                            <li className="cursor-pointer hover:text-primary transition-colors duration-200 px-4">Services</li>
                            <li className="cursor-pointer hover:text-primary transition-colors duration-200 px-4">Contact</li>
                        </ul>
                    </div>

                    {/* Mobile Navlinks */}
                    <div className="flex-none md:hidden">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52" id="mobileNavLinks">
                                <li><a>Home</a></li>
                                <li><a>About</a></li>
                                <li><a>Services</a></li>
                                <li><a>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

            <main className="min-h-screen h-full pb-28">
                {/* Hero */}
                <section className="hero bg-base-100 xl:min-h-screen py-28">
                    <div className="hero-content flex-col lg:flex-row lg:space-x-4">
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-bold">Find the <span id="hero-header">Right</span> Exit</h1>
                            <p className="py-6 text-xl">
                                A landing experience designed to guide you seamlessly, without distractions. Unless you notice what doesn&apos;t belong. <span id="hero-tagline"></span>
                            </p>
                            <div className="flex space-x-4">
                                <GetStartedButton />
                                <button className="btn btn-lg btn-outline">Learn More</button>
                            </div>
                        </div>
                        <HeroImage />
                    </div>
                </section>

                {/* Services */}
                <section className="bg-base-100 py-28">
                    <div className="max-w-7xl mx-auto flex flex-col justify-center items-center text-center px-4">
                        <h2 className="text-4xl lg:text-5xl">Our Services</h2>
                        <p className="mt-4 text-base-content/80">Helping businesses adapt and grow with modern technology.</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 text-center">
                            <li className="space-y-2 p-6 border border-gray-300 hover:border-primary transition-colors duration-200 rounded-xl" id="first-service">
                                <figure className="bg-primary p-4 w-fit mx-auto rounded-xl">
                                    <FaCloud className="text-2xl text-primary-content" />
                                </figure>
                                <h3 className="text-lg">Cloud Solutions</h3>
                                <p className="text-base-content/80">Reliable cloud hosting and storage to keep your business scalable and connected.</p>
                            </li>
                            <li className="space-y-2 p-6 border border-gray-300 hover:border-primary transition-colors duration-200 rounded-xl ">
                                <CybersecurityShield />
                                <h3 className="text-lg">Cybersecurity</h3>
                                <p className="text-base-content/80">Protection for your data, systems, and users with up-to-date security measures.</p>
                            </li>
                            <li className="space-y-2 p-6 border border-gray-300 hover:border-primary transition-colors duration-200 rounded-xl overflow-hidden">
                                <figure className="bg-primary p-4 w-fit mx-auto rounded-xl">
                                    <FaBolt className="text-2xl text-primary-content" />
                                </figure>
                                <h3 className="text-lg">Digital Transformation</h3>
                                <p className="text-base-content/80" id="random-unicode">Upgrade outdated processes with modern tools to improve efficiency and customer engagement.</p>
                            </li>
                            <li className="space-y-2 p-6 border border-gray-300 hover:border-primary transition-colors duration-200 rounded-xl relative">
                                <div className="hidden top-0 left-0 w-full h-full bg-black" id="redacted-service">
                                    <p className="absolute top-0 left-0 w-full h-full text-error z-1 uppercase text-4xl sm:text-5xl font-semibold flex justify-center items-center">[redacted]</p>
                                </div>
                                <figure className="bg-primary p-4 w-fit mx-auto rounded-xl">
                                    <FaUserGroup className="text-2xl text-primary-content" />
                                </figure>
                                <h3 className="text-lg">IT Consulting</h3>
                                <p className="text-base-content/80">Clear guidance on choosing, planning, and implementing the right technologies for your goals.</p>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Why Choose The Normality & Testimonials */}
                <section className="bg-base-100 py-28 px-4">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Why Choose*/}
                        <div>
                            <h3 className="text-4xl lg:text-5xl">Why Choose</h3>
                            <h3 className="text-4xl lg:text-5xl text-primary" id="about-header">The Normality?</h3>
                            <p className="my-8">We&apos;re more than just a service provider, we&apos;re your partner in building dependable technology solutions. Our focus is on reliability, transparency, and long-term results.</p>

                            <BenefitsList />

                            <div className="bg-primary text-white flex justify-between items-center p-6 mt-6">
                                <div>
                                    <p className="text-xl font-medium">500+</p>
                                    <p>Projects Completed</p>
                                </div>
                                <div>
                                    <p className="text-xl font-medium">98%</p>
                                    <p>Client Satisfaction</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonials */}
                        <div>
                            <h3 className="capitalize text-2xl mb-4">what our <span id="testimonial-header">clients</span> say</h3>
                            <ul className="space-y-4">
                                <li className="border border-gray-300 p-6 rounded-xl">
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-warning" aria-label="1 star" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-warning" aria-label="2 star" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-warning" aria-label="3 star" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-warning" aria-label="4 star" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-warning" aria-label="5 star" aria-current="true" />
                                    </div>
                                    <p className="italic text-sm text-base-content/70 my-4">“The Normality transformed our entire infrastructure. Their expertise and dedication helped us scale from startup to industry leader.”</p>
                                    <div className="avatar flex items-center space-x-4">
                                        <TestimonialAvatarAnomaly />
                                        <p>Sarah Johnson - <span className="text-base-content/60">CTO, InnovateTech</span></p>
                                    </div>
                                </li>
                                <li className="border border-gray-300 p-6 rounded-xl">
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-warning" aria-label="1 star" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-warning" aria-label="2 star" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-warning" aria-label="3 star" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-warning" aria-label="4 star" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-warning" aria-label="5 star" aria-current="true" />
                                    </div>
                                    <p className="italic text-sm text-base-content/70 my-4" id="help-testimonial">“Outstanding service and innovative solutions. They understood our complex requirements and delivered beyond expectations.”</p>
                                    <div className="avatar flex items-center space-x-4">
                                        <div className="w-12 rounded-full relative">
                                            <Image src={avatar2} alt="avatar" fill className="object-cover" />
                                        </div>
                                        <p><span id="avatar-name">Michael Chen</span> - <span className="text-base-content/60">Founder, DataFlow Solutions</span></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="bg-neutral text-neutral-content p-10">
                <div className="footer sm:footer-horizontal max-w-7xl mx-auto">
                    <aside>
                        <div className="mb-4">
                            <p className="text-primary text-2xl mb-1">The Normality</p>
                            <p><span id="footer-tagline">Driving innovation</span>, scaling businesses.</p>
                        </div>

                        <ul className="space-y-2">
                            <li className="flex items-center space-x-2">
                                <FaRegEnvelope className="text-primary" /> <span>contact@thenormality.com</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <BsTelephone className="text-primary" /> <span>+1 234 567 890</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <FaLocationDot className="text-primary" /> <span id="locationFooter">Cairo, Egypt</span>
                            </li>
                        </ul>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Quick Links</h6>
                        <a className="link link-hover">Home</a>
                        <a className="link link-hover">About</a>
                        <a className="link link-hover">Services</a>
                        <a className="link link-hover">Contact</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Cloud Solutions</a>
                        <a className="link link-hover">Cybersecurity</a>
                        <a className="link link-hover">Digital Transformation</a>
                        <a className="link link-hover">IT Consulting</a>
                    </nav>
                </div>
                <div className="h-[1px] bg-gray-800 my-6 max-w-7xl mx-auto"></div>
                <div className="flex justify-center items-center max-w-7xl mx-auto">
                    <p className="text-center">© <span id="footerYear">2025</span> The Normality. All rights reserved.</p>
                </div>
                <div className="h-28"></div>
            </footer>
        </div>
    );
}

export default LandingPage;