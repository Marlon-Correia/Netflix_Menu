import React from 'react';
import * as C from './styled'
import './header.css'

const Header = ({black}) => {
    return (  
        <C.Header className={black ? 'black' : ''}>
            <C.Logo>
                <C.ImgLogo src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Logo Netflix" />
            </C.Logo>
            <C.User>
                <C.ImgUser src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar" />
            </C.User>
        </C.Header>
    );
}

export default Header;