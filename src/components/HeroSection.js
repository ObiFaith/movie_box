import Header from './Header';
import Rating from './Rating';

const HeroSection = () => {
    return (
        <div className='background'>
            <Header/>
            <section className='hero container'>
                <div className='hero_content'>
                    <h1 className='fs-800'>John Wick 3 :<br/>Parabellum</h1>
                    <Rating/>
                    <p className='hero-text'>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
                    <a className='btn d-flex'>
                        <i className='fa-solid fa-play'></i>
                        Watch trailer
                    </a>
                </div>
            </section>
        </div>
    );
}

export default HeroSection;