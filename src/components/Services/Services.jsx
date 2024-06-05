import React from 'react'
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
    {
      name: "App Development",
      icon: <FaCameraRetro className="text-4xl text-primary" />,
      link: "#",
      description:
        "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
      aosDelay: "0",
    },
    {
      name: "Web Designing",
      icon: <GiNotebook className="text-4xl text-primary" />,
      link: "#",
      description:
        "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
      aosDelay: "300",
    },
    {
      name: "Graphic Designing",
      icon: <SlNote className="text-4xl text-primary" />,
      link: "#",
      description:
        "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
      aosDelay: "500",
    },
    {
      name: "Digital Marketing",
      icon: <SlNote className="text-4xl text-primary" />,
      link: "#",
      description:
        "ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus",
      aosDelay: "700",
    },
  ];
  
const Services = () => {
  return (
    <>
        <div className='py-12 bg-gray-100 dark:bg-black dark:text-white sm:grid sm:place-items-center'>
            <div className="container">
                {/* header section */}
                <div className='pb-12 space-y-3 text-center'>
                    <h1 className='text-3xl font-semibold text-violet-950 dark:text-primary'>Explore Our Services</h1>
                    <p>
                        We are self-service data analytics software that lets you create
                        visually.
                    </p>
                </div>
                {/* card section */}
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4'>
                    {skillsData.map((skill) => (
                        <div
                            key={skill.name}
                            data-aos="fade-up"
                            data-aos-delay={skill.aosDelay}
                            className="p-4 space-y-3 card sm:space-y-4">
                            <div>{skill.icon}</div>
                            <h1 className="text-lg font-semibold">{skill.name}</h1>
                            <p className="text-gray-600 dark:text-gray-400">
                            {skill.description}
                            </p>
                        </div>
                    ))}
                </div>
                {/* button section */}
                <div className='mt-4 text-center sm:mt-8'>
                    <button className='primary-btn'>Learn More</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Services