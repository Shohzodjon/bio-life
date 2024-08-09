import Image from "next/image"
const HomeCard = ({ img, title }) => {
    return (
        <div className="card">
            <div className="card-img">
                <img src={img}  alt="img" />
            </div>
            <div className="card-info">
                <h2>{title}</h2>
            </div>
        </div>
    )
}
export default HomeCard;