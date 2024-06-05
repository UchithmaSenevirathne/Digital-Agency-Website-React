import React from 'react'
import Img1 from "../../assets/blog/blog1.png";
import Img2 from "../../assets/blog/blog2.png";
import Img3 from "../../assets/blog/blog3.png";
import BlogCard from './BlogCard';

const BlogsData = [
    {
      id: 1,
      image: Img1,
      title: "Realtime analytics",
      description:
        "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible.",
      author: "Someone",
      date: "April 22, 2022",
    },
    {
      id: 2,
      image: Img2,
      title: "Realtime analytics",
      description:
        "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible. ",
      author: "Someone",
      date: "April 22, 2022",
    },
    {
      id: 3,
      image: Img3,
      title: "Realtime analytics",
      description:
        "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible. ",
      author: "Someone",
      date: "April 22, 2022",
    },
  ];

const BlogComp = () => {
  return (
    <>
        <div className='py-10 bg-gray-100 dark:bg-gray-900 dark:text-white pb-14'>
            <div className="container">
                <h1 className='py-2 pl-2 my-8 text-3xl font-semibold border-l-8 border-primary/50'>
                    Our Blogs
                </h1>
                
                
                
            </div>
        </div>
    </>
  )
}

export default BlogComp