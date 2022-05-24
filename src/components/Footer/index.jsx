import React from 'react';
import * as C from './styled';

const Footer = () => {
    return (  
        <C.Footer>
            Feito de <span role='img' aria-label='coração'>❤️</span> por <C.a href='https://www.instagram.com/marlo_dev/' target='_blank'>Marlon Correia.</C.a> <br />
            Direitos de imagem para Netflix  <br />
            Dados pegos do site TheMoviedb.org
        </C.Footer>
    );
}

export default Footer;