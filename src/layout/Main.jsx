import React from 'react'
import { useEffect, useState } from 'react'
import Movies from '../components/Movies'
import Preloader from '../components/Preloader'
import Search from '../components/Search'


const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {

  let [loading, setLoading] = useState(true);

  let [move, setMovies] = useState(0);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=all`)
      .then(response => response.json())
      .then(data => {
        setMovies(move = data.Search);
        setLoading(loading = false);
      })
  }, [])

  function searchMovies(str, type = 'all') {
    setLoading(loading = true)
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
      .then(response => response.json())
      .then(data => {
        setMovies(move = data.Search)
        setLoading(loading = false);
      })
  }

  return (
    <main className='main__container main__content'>
      <Search
        func={searchMovies}
      />
      {
        loading
          ? <Preloader />
          : <Movies movies={move} />
      }


    </main>
  )
}

export default Main

