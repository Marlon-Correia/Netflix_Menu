import React from 'react';
import * as C from './styled'

export default ({item}) => {
    let desc = item.overview;
    let firstDate = new Date(item.first_air_date);  ;
    let genres = [] ;
    for(let i in item.genres){
        genres.push(item.genres[i].name)
    }
    let description = item.overview
    if(description.length > 180) {
        description = description.subString(0, 180)+'...'
    }

    return (  
        <C.Featured style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <C.FeaturedVertical>
                <C.FeaturedHorizontal>
                    <C.Name>{item.name}</C.Name>
                    <C.Info>
                        <C.Points>{item.vote_average} pontos</C.Points>
                        <C.Year>{firstDate.getFullYear()}</C.Year>
                        <C.Seasons>{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</C.Seasons>
                    </C.Info>
                    <C.Desc>{description}</C.Desc>
                    <C.AreaButtons>
                        <C.buttonWatch href={`/watch/${item.id}`}>► Assistir</C.buttonWatch>
                        <C.buttonList href={`/list/add${item.id}`}>+ Minha Lista</C.buttonList>
                    </C.AreaButtons>
                    <C.Genres><strong>Gêneros: </strong> {genres.join(', ')}.</C.Genres>
                </C.FeaturedHorizontal>
            </C.FeaturedVertical>
        </C.Featured>
    );
};