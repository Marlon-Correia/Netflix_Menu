import axios from "axios";

const api_key = 'df13a11cfa041d8bcfb6bd04d9a604c0';
const api_base = 'https://api.themoviedb.org/3';

/*
- originais da netflix;
- recomendados(tranding);
- em alta(top retad);
- ação
- comédia
- terror
- romance
- documentário
*/ 

const basicFetch = async (endPoint) => {
    const req = await fetch(`${api_base}${endPoint}`);
    const json = req.json();
    return json;
}


export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_networks=213&language=pt-BR&api_key=${api_key}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${api_key}`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${api_key}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${api_key}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${api_key}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${api_key}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${api_key}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${api_key}`)
            },
        ]
    },
    getMovieInfo: async (movieId, type) => {
        let info = {}
        if(movieId){
            switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?languege=pt-BR&api_key=${api_key}`)
                break
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${api_key}`)
                break
                default: 
                    info= null;
                break
            }
        }

        return info
    }
}