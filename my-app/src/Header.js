import React from "react";
import "./Header.css";
import img1 from "./images/tinder.png"
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon className="header__icon" fontSize="large" />
      </IconButton>
      <Link to="/">
        <img className="header__logo" src={img1}
          alt="tinder logo" />
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header__icon " fontSize="large" />
        </IconButton>
      </Link>
    </div>
  )
}
export default Header
