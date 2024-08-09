"use client";
import HeaderComp from "./components/header";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import HomeCard from "./components/card";
import BlogCard from "./components/blog-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { RiLinkedinFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Home() {
  const partners = [
    { src: "/images/partner1.png", width: 70, height: 70, alt: "Partner 1" },
    { src: "/images/partner4.png", width: 70, height: 70, alt: "Partner 2" },
    { src: "/images/partner3.png", width: 70, height: 70, alt: "Partner 3" },
    { src: "/images/partner4.png", width: 70, height: 70, alt: "Partner 4" },
    { src: "/images/partner5.jpg", width: 70, height: 70, alt: "Partner 5" },
    { src: "/images/partner6.png", width: 70, height: 70, alt: "Partner 6" },
    { src: "/images/partner1.png", width: 70, height: 70, alt: "Partner 1" },
    { src: "/images/partner5.jpg", width: 70, height: 70, alt: "Partner 2" },
    { src: "/images/partner3.png", width: 70, height: 70, alt: "Partner 3" },
    { src: "/images/partner4.png", width: 70, height: 70, alt: "Partner 4" },
    { src: "/images/partner5.jpg", width: 70, height: 70, alt: "Partner 5" },
    { src: "/images/partner6.png", width: 70, height: 70, alt: "Partner 6" },
    { src: "/images/partner1.png", width: 70, height: 70, alt: "Partner 1" },
    { src: "/images/partner6.png", width: 70, height: 70, alt: "Partner 2" },
    { src: "/images/partner3.png", width: 70, height: 70, alt: "Partner 3" },
    { src: "/images/partner4.png", width: 70, height: 70, alt: "Partner 4" },
    { src: "/images/partner5.jpg", width: 70, height: 70, alt: "Partner 5" },
    { src: "/images/partner6.png", width: 70, height: 70, alt: "Partner 6" },
  ];

  const data = [
    { img: "/images/urban.png", title: "URBAN PLANNING", id: 1 },
    { img: "/images/graphics.png", title: "GRAPHICS DESIGN", id: 2 },
    { img: "/images/art.png", title: "ART", id: 3 },
  ];
  const blogs = [
    {
      img: "/images/blog1.jpg",
      title: "Lörem ipsum patt kar i renyst",
      desc: "Lörem ipsum patt kar i renyst robotfälla. Tregyktig  sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen",
      id: 1,
    },
    {
      img: "/images/blog2.jpg",
      title: "Lörem ipsum patt kar i renyst",
      desc: "Lörem ipsum patt kar i renyst robotfälla. Tregyktig  sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen",
      id: 2,
    },
    {
      img: "/images/blog3.jpg",
      title: "Lörem ipsum patt kar i renyst",
      desc: "Lörem ipsum patt kar i renyst robotfälla. Tregyktig  sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen",
      id: 3,
    },
    {
      img: "/images/blog1.jpg",
      title: "Lörem ipsum patt kar i renyst",
      desc: "Lörem ipsum patt kar i renyst robotfälla. Tregyktig  sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen",
      id: 4,
    },
    {
      img: "/images/blog2.jpg",
      title: "Lörem ipsum patt kar i renyst",
      desc: "Lörem ipsum patt kar i renyst robotfälla. Tregyktig  sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen",
      id: 5,
    },
    {
      img: "/images/blog3.jpg",
      title: "Lörem ipsum patt kar i renyst",
      desc: "Lörem ipsum patt kar i renyst robotfälla. Tregyktig  sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen",
      id: 6,
    },
    {
      img: "/images/blog1.jpg",
      title: "Lörem ipsum patt kar i renyst",
      desc: "Lörem ipsum patt kar i renyst robotfälla. Tregyktig  sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen",
      id: 7,
    },
    {
      img: "/images/blog1.jpg",
      title: "Lörem ipsum patt kar i renyst",
      desc: "Lörem ipsum patt kar i renyst robotfälla. Tregyktig  sana, nuktigt i mandatpingis tes. Analigt anede. Arat lagen",
      id: 8,
    },
  ];
  return (
    <section className="home-page">
      <HeaderComp />
      <div className="container">
        <Marquee pauseOnHover={true}>
          {partners.map((partner, index) => (
            <div className="partner-card" key={index}>
              <Image
                src={partner.src}
                width={partner.width}
                height={partner.height}
                alt={partner.alt}
              />
            </div>
          ))}
        </Marquee>
        <section className="home-page__card">
          {data.map((item) => (
            <HomeCard img={item.img} title={item.title} key={item.id} />
          ))}
        </section>
        <section className="home-page__blog">
          <h2>Lastest blog</h2>
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            centeredSlides={true}
            loop
            autoplay
            modules={[Navigation, Pagination, Autoplay]}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              991: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {blogs.map((item) => (
              <SwiperSlide key={item.id}>
                <BlogCard data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <ul className="home-page__social">
          <li>
            <a href="https://www.linkedin.com/">
              <RiLinkedinFill />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <IoLogoInstagram />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
