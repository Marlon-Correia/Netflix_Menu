import React, { useState, useEffect } from 'react';
import Tmdb from './Tmdb';
import * as C from './App.styled';
import './App.css';

import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect( () => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list)

      let netflixOriginals = list.filter(item => item.slug === 'originals') //filtrando os itens por original netflix
      let randomChosen = Math.floor(Math.random() * (netflixOriginals[0].items.results.length - 1)) //gerando um numero aleatorio, com base na quantidade de itens de originals
      let chosen = netflixOriginals[0].items.results[randomChosen] // pegando o filme com base no numero gerado
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeatureData(chosenInfo);
    };
    loadAll();
  }, [])

  useEffect( () => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      };
    }
    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <C.Page>

      <Header black={blackHeader} />

      {featureData &&
        <FeaturedMovie item={featureData} />
      }
      
      <C.Lists>
        {movieList.map( (item, key) => (
          <MovieRow 
            key={key} 
            title={item.title} 
            items={item.items} 
          />
        ))}
      </C.Lists>

      <Footer />
      {movieList.length <= 0 &&
        <C.Loading>
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" width='500px' alt="Carregando" />
        </C.Loading>
      }
    </C.Page>
  );
}

export default App;