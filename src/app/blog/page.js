"use client";
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import BlogCard from "../components/blog-card";
import { RiLinkedinFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa6";
import { TfiPinterest } from "react-icons/tfi";
import { IoLogoInstagram } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
gsap.registerPlugin(ScrollTrigger);
const Blog = () => {

  useEffect(() => {
    gsap.utils.toArray(".blog-card").forEach((card) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 200,
        },
        {
          scrollTrigger: {
            trigger: card,
            start: "top 80%", 
            end: "bottom top", 
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          y: 0,
          duration: 1,
        }
      );
    });
  }, []);


  const postData = [
    {
      desc: "Lörem ipsum patt kar i renyst robotfälla. Tregyktig  sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen",
      title: "Lörem ipsum patt karirenyst",
      img: "/images/post1.jpg",
      id: 1,
    },
    {
      desc: "Lörem ipsum patt kar i renyst robotfälla. Tregyktig  sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen",
      title: "Lörem ipsum patt karirenyst",
      img: "/images/post2.jpg",
      id: 2,
    },
    {
      desc: "Lörem ipsum patt kar i renyst robotfälla. Tregyktig  sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen",
      title: "Lörem ipsum patt karirenyst",
      img: "/images/post3.jpg",
      id: 3,
    },
    {
      desc: "Lörem ipsum patt kar i renyst robotfälla. Tregyktig  sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen",
      title: "Lörem ipsum patt karirenyst",
      img: "/images/post4.jpg",
      id: 4,
    },
    {
      desc: "Lörem ipsum patt kar i renyst robotfälla. Tregyktig  sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen",
      title: "Lörem ipsum patt karirenyst",
      img: "/images/post5.jpg",
      id: 5,
    },
    {
      desc: "Lörem ipsum patt kar i renyst robotfälla. Tregyktig  sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen",
      title: "Lörem ipsum patt karirenyst",
      img: "/images/post1.jpg",
      id: 6,
    },
    {
      desc: "Lörem ipsum patt kar i renyst robotfälla. Tregyktig  sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen",
      title: "Lörem ipsum patt karirenyst",
      img: "/images/post2.jpg",
      id: 7,
    },
    {
      desc: "Lörem ipsum patt kar i renyst robotfälla. Tregyktig  sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen",
      title: "Lörem ipsum patt karirenyst",
      img: "/images/post3.jpg",
      id: 8,
    },
    {
      desc: "Lörem ipsum patt kar i renyst robotfälla. Tregyktig  sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen",
      title: "Lörem ipsum patt karirenyst",
      img: "/images/post4.jpg",
      id: 9,
    },
    {
      desc: "Lörem ipsum patt kar i renyst robotfälla. Tregyktig  sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen",
      title: "Lörem ipsum patt karirenyst",
      img: "/images/post5.jpg",
      id: 10,
    },
    {
      desc: "Lörem ipsum patt kar i renyst robotfälla. Tregyktig  sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen",
      title: "Lörem ipsum patt karirenyst",
      img: "/images/post1.jpg",
      id: 11,
    },
  ];
  return (
    <section className="blog-page">
      <div className="container">
        <div className="blog-page__flex">
          <Link href="/blog" className="active-link">
            Lastes blog
          </Link>
          <ul>
            <li>
              <Link href="/">Urban Planning</Link>
            </li>
            <li>
              <Link href="/">Graphics Design</Link>
            </li>
            <li>
              <Link href="/">Web Design</Link>
            </li>
            <li>
              <Link href="/">UX/UI Design</Link>
            </li>
            <li>
              <Link href="/">Technology</Link>
            </li>
          </ul>
          <button className="blog-page__menu"><FiMenu/></button>
        </div>

        <main>
          <div className="blog-page__img-wrapper">
            <img src="/images/city.jpg" alt="city" />
          </div>
          <div className="blog-page__img-desc">
            <h4>Urban Planning</h4>
            <h2>Lörem ipsum europlande krohiskap panstik, förväntis.</h2>
            <p>
              Lörem ipsum europlande krohiskap panstik, förväntis. Klicktivism
              plada. Ekrofiling hedår, medan al, monoktig härgjord.
              Supranylingar kask. Geologi byligt dikapobelt.{" "}
            </p>

            <button>Read more</button>
          </div>
        </main>

        <section className="blog-page__post">
          <h3>Recent Posts</h3>
          <div className="blog-page__grid">
            {postData.map((item) => (
              <BlogCard data={item} key={item.id} />
            ))}
          </div>

          <h4 className="blog-page__sub-title">daily blog</h4>
          <p className="blog-page__desc">
            Lörem ipsum patt kar i renyst robotfälla. Tregyktig sana, nuktigt i
            mandatpingis tes. Analigt anede. Arat lagen.Lörem ipsum patt kar i
            renyst robotfälla. Tregyktig sana, nuktigt i mandatpingis tes.
            Analigt anede.{" "}
          </p>

          <ul className="blog-page__social">
            <li>
              <a href="https://www.instagram.com/">
                <IoLogoInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <svg
                  width="26"
                  height="16"
                  viewBox="0 0 26 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5938 7.65625C10.5938 7.65625 12.6562 6.88969 12.6562 4.21875C12.6562 1.54781 10.8894 0.4375 8.53125 0.4375H0.625V15.5625H8.53125C8.53125 15.5625 13 15.5625 13 11.0938C13 11.0938 13 7.65625 10.5938 7.65625ZM4.0625 3.1875H8.53125C8.53125 3.1875 9.5625 3.1875 9.5625 4.5625C9.5625 6.11625 8.875 6.28125 8.1875 6.28125H4.0625V3.1875ZM8.1875 12.8125H4.0625V9.03125L8.39031 9.00719C8.39031 9.00719 9.90625 9.03125 9.90625 11.0938C9.90625 12.8125 8.80969 12.7953 8.1875 12.8125ZM20.1397 4.1775C14.4025 4.1775 14.4059 9.91125 14.4059 9.91125C14.4059 9.91125 14.0897 15.5625 20.2188 15.5625C20.2188 15.5625 25.375 16.0403 25.375 11.7812H22.625C22.625 11.7812 22.7075 13.2525 20.2188 13.2525C20.2188 13.2525 17.4688 13.5241 17.4688 10.75H25.375C25.375 10.75 26.1794 4.1775 20.1397 4.1775ZM22.625 8.6875H17.4688C17.4688 8.6875 17.895 6.36375 20.1981 6.36375C22.5013 6.36375 22.625 8.6875 22.625 8.6875ZM16.7812 1.125H23.3125V3.1875H16.7812V1.125Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <RiLinkedinFill />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <TfiPinterest />
              </a>
            </li>
          </ul>

          <a className="blog-page__author" href="https://example.com/">
            © 2023 dailyblog. All rights reserved.
          </a>
        </section>
      </div>
    </section>
  );
};
export default Blog;
