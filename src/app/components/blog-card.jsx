const BlogCard = ({ data }) => {
    return (
        <div className="blog-card">
            <div className="blog-card__img">
                <img src={data.img} alt="blog img" />
            </div>
            <div className="blog-card__info">
                <h2>{data.title}</h2>
                <p>{data.desc}</p>
                <button>Read More</button>
            </div>
        </div>
    )
}
export default BlogCard;