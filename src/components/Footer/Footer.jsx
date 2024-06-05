import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterLinks = [
    {
      title: "About",
      link: "/#about",
    },
    {
      title: "Features",
      link: "/#features",
    },
    {
      title: "Works",
      link: "/#works",
    },
    {
      title: "Career",
      link: "/#career",
    },
  ];
  const HelpLinks = [
    {
      title: "Customer Support",
      link: "/#support",
    },
    {
      title: "Delivery Details",
      link: "/#delivery-details",
    },
    {
      title: "Terms & Conditions",
      link: "/#terms",
    },
    {
      title: "Privacy Policy",
      link: "/#policy",
    },
  ];
  const ResourcesLinks = [
    {
      title: "Free Ebooks",
      link: "/#ebooks",
    },
    {
      title: "How To Blog",
      link: "/#blogs",
    },
    {
      title: "Subscribe TCJ",
      link: "https://www.youtube.com/channel/UC1H-a1MKEFXRiFlGNLcy7gQ?sub_confirmation=1",
    },
  ];

const Footer = () => {
  return (
    <>
        <div className="text-white bg-black/95">
            <section className="container py-10">
                <div className="grid py-5 md:grid-cols-3">
                    {/* company details */}
                    <div className="px-4 py-8 ">
                        <h1 className="flex items-center gap-3 mb-3 text-xl font-bold text-justify sm:text-3xl sm:text-left">
                        Digital Agency
                        </h1>
                        <p className="text-sm">
                        Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit consectetur adipisicing elit ipsum
                        dolor sit amet consectetur. adipisicing{" "}
                        </p>
                        <br />
                        {/* Social Handle */}
                        <div className="flex items-center gap-4 mt-6">
                            <a href="#">
                                <FaInstagram className="text-2xl duration-300 hover:text-primary" />
                            </a>
                            <a href="#">
                                <FaFacebook className="text-2xl duration-300 hover:text-primary" />
                            </a>
                            <a href="#">
                                <FaLinkedin className="text-2xl duration-300 hover:text-primary" />
                            </a>
                        </div>
                    </div>
                    {/* Links */}
                    <div className="grid grid-cols-2 col-span-2 sm:grid-cols-3 md:pl-10 ">
                        <div className="">
                            <div className="px-4 py-8 ">
                                <h1 className="mb-3 text-xl font-bold text-justify sm:text-xl sm:text-left">
                                    Company
                                </h1>
                                <ul className={`flex flex-col gap-3`}>
                                    {FooterLinks.map((link) => (
                                        <li
                                            key={link.title}
                                            className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 "
                                            >
                                            <span>{link.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="">
                            <div className="px-4 py-8 ">
                                <h1 className="mb-3 text-xl font-bold text-justify sm:text-xl sm:text-left">
                                    Help
                                </h1>
                                <ul className="flex flex-col gap-3">
                                    {HelpLinks.map((link) => (
                                        <li
                                            key={link.title}
                                            className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 "
                                            >
                                            <span>{link.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="">
                            <div className="px-4 py-8 ">
                                <h1 className="mb-3 text-xl font-bold text-justify sm:text-xl sm:text-left">
                                    Resources
                                </h1>
                                <ul className="flex flex-col gap-3">
                                    {ResourcesLinks.map((link) => (
                                        <li
                                            key={link.title}
                                            className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 "
                                            >
                                            <span>{link.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}

export default Footer