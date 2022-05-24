import React, { useState } from 'react';
import * as C from './styled';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


export default ({title, items, key}) => {
    const [scrollX, setScrollX] = useState(0)

    const handleLeftArrow = () => {
        let newScroll = scrollX + Math.round(window.innerWidth / 2);
        if(newScroll > 0){
            newScroll = 0
        }
        setScrollX(newScroll);
    }

    const handleRightArrow = () => {
        let listWidth = items.results.length * 150;
        let newScroll = scrollX - Math.round(window.innerWidth / 2);
        if((window.innerWidth - listWidth) > newScroll ){
            newScroll = (window.innerWidth - listWidth) - 60;
        }
        setScrollX(newScroll)
    }

    return ( 
        <C.MovieRow>
            <C.H2>{title}</C.H2>
            <C.ArrowLeft className='movieRow--left' onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}} />
            </C.ArrowLeft>
            <C.ArrowRight className='movieRow--right' onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}} />
            </C.ArrowRight>
            <C.ListArea key={key}>
                <C.List style={{
                        marginLeft: scrollX, 
                        width: items.results.length * 150
                    }}>
                    {items.results.length > 0 && items.results.map( (item, index) => (
                        <C.Item key={index}>
                            <C.ItemImg src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} key={index} />
                        </C.Item>
                    ))}
                </C.List>
            </C.ListArea>
        </C.MovieRow>
    );
};