import Rating from "./Rating";

const Card = ({title, country, image, percentage, year}) => {
    let cty;
    if (country === 'cn')
        cty = 'Chinese'
    else if (country === 'hi')
        cty = 'India'
    else cty = 'USA'

    return (
        <div className="card">
            <img className="card-img" src={image} alt='#'/>
            <div>
                <div className="card-release">{cty}, {year} - Current</div>
                <h3 className="card-tile">{title}</h3>
                <Rating rate={percentage}/>
                <div>Action, Adventure, Horror</div>
            </div>
        </div>
    );
}

export default Card;