import React from 'react'

const Movie = (props) => {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props
    return (
        <div id={id} className="card movie">
            <div className="card-image waves-effect waves-block waves-light">
                {poster === 'N/A' ? <img className="activator" src='https://img2.akspic.ru/previews/2/9/0/9/6/169092/169092-sipuha-neyasyt-ptica-klyuv-naturalnyj_material-x750.jpg' /> : <img className="activator" src={poster} />
                }
                
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{title}</span>
                <p className='movie__info'>{year} <span className='right'>{type}</span> </p>
            </div>

        </div>
    )
}

export default Movie