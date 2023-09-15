import Rating from "./Rating";

const Card = ({title, country, image, percentage, year}) => {
    let cty;
    if (country === 'cn')
        cty = 'Chinese'
    else if (country === 'hi')
        cty = 'India'
    else cty = 'USA'

    return (
        <div className="card" data-testid='movie-card'>
            <img data-testid='movie-poster' className="card-img" src={`https://image.tmdb.org/t/p/w500${image}`} alt='#'/>
            <div>
                <div className="card-release"><span data-testid='movie-release-date'>{cty}</span>, {year}</div>
                <h3 data-testid='movie-title' className="card-tile">{title}</h3>
                <Rating rate={`${percentage}%`}/>
                <div>Action, Adventure, Horror</div>
            </div>
        </div>
    );
}

export default Card;