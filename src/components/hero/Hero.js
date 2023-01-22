import React from 'react'
import './Hero.css'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'

const Hero = ({movies}) => {
    console.log(movies)
  return (
    <div className='movie-carousel-container'>
        {
            movies && movies.length > 0 ? (
                <Carousel>{movies.map((movie) => 
                    <Paper>
                        <div className='movie-card-container'>
                            <div className="movie-card" style={{ '--img': `url(${movie.images[0]})` }}>
                                <div className="movie-detail">
                                    <div className="movie-poster">
                                        <img src={movie.poster} alt={movie.title} />
                                    </div>
                                    <div className="movie-title">
                                        <h4>{movie.title}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Paper>)}
                </Carousel>
            ) : null
        }
    </div>
  )
}

export default Hero