import Link from "next/link";
import BlogCard from "../components/blog-card";

const Blog = () => {
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
          <Link href="/blog">Lastes blog</Link>
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
        </section>
      </div>
    </section>
  );
};
export default Blog;
