// import cardImg from "../assets/images/card-image1.png"
import iconStart from "/images/icon-star.png"
const Card = ({coverImg,description,location,openSpots,price,stats,title})=>{
    // console.log({coverImg,description,location,openSpots,price,stats,title,location})
    return(
        <div className="card">
            <img src={`/images/${coverImg}`} alt="cover" className="card--img" />  
            <small className="card--stats">
                <img src={iconStart} alt="star" className="star--icon"/>
                <span className="rating--up">{stats.rating}</span>
                <span className="rating--down">({stats.reviewCount})</span>
                <span className="point"></span>
                <span className="country">{location}</span>
            </small> 
            <h1 className="card--title">
            {title}
            </h1>
            <span className="card-price"><strong className="bold">From {price} /</strong>person</span>
        </div>
    )
}
export default Card