import imdb from '../Img/imdb.png';
import fruit from '../Img/fruit.png'

const Rating = ({rate}) => {
    return(
        <div className="d-flex rating">
            <div className='d-flex'>
                <img src={imdb} alt='IMDB'/>
                <p>86.0 / 100</p>
            </div>
            <div className='d-flex'>
                <img src={fruit} alt='Fruit'/>
                <p>{rate}</p>
            </div>
        </div>
    );
}

export default Rating;