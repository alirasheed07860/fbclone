import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupsIcon from '@mui/icons-material/Groups';
import { Avatar, IconButton } from '@mui/material';
import { CircleNotifications, MessageRounded } from '@mui/icons-material';
import { useStateValue } from './StateProvider';
function Header() {
  const [{user},dispatch]=useStateValue();
  return (
    <div className='header'>
      <div className='header__left'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png' alt='Error'/>
            <div className='header__input'> 
            <SearchIcon />
                <input placeholder='Search facebook' type='text'/>
            </div>

            </div>



            <div className='header__center'>
                <div className='header__option header__option-active'>
                <HomeIcon /> </div>
                  <div className='header__option'>
                  <FlagIcon /> </div>
                  <div className='header__option'>
                  <OndemandVideoIcon /> </div>
                  <div className='header__option'>
                  <StorefrontIcon /> </div>
                  <div className='header__option'>
                  <GroupsIcon /> </div>
                  
                
            </div>



            <div className='header__right'>
              <div className='header__info'>
                <Avatar src={user.photoURL} /> 
                <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                <AddIcon />
                </IconButton>
                <IconButton>
                <ForumIcon />
                </IconButton>
                <div className='header__info'>
                <MessageRounded /> </div>  
                <div className='header__info'>
                <CircleNotifications /> </div>
            </div>
              
            
    </div>
   
  )
}

export default Header;




  