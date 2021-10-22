import React from "react";
import "./Header.css";
import img1 from "./images/tinder.png"
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';

const Header = () => {
    return (
        <div className="header">
          <IconButton>
            <PersonIcon className="header__icon" fontSize="large" />
          </IconButton>
          <img className="header__logo"  src={img1} 
            alt="tinder logo"/>
          <IconButton>
            <ForumIcon className="header__icon " fontSize="large" />
          </IconButton>
        </div>
    )
}
export default Header
 