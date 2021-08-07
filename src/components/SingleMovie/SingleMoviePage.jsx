
import { img_500 } from "../../config/config"
import Panda from '../../images/Panda.jpg'
import './SingleMoviePage.css'

const SingleMoviePage = () => {

    let movie = localStorage.getItem('clickedMovie')
    movie = JSON.parse(movie)
    return (
        <div className='movie-container'>
            {console.log(`${img_500}/${movie.poser_path}`)}
            <img
            className="poster"
            src={movie.poster_path ? `${img_500}/${movie.poster_path}` : Panda}
            alt='Panda'
          />
        </div>
    )
}

export default SingleMoviePage
