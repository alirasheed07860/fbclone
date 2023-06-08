import React from 'react'
import "./Sidebar.css";

import { Avatar } from '@mui/material';
import { Add, Bloodtype, Event, Feed, Foundation, Games, Group, Memory, Message, Payment, Save, Store, Watch } from '@mui/icons-material';
// import { useStateValue } from './StateProvider';

function Sidebar() {
  // const [{user}, dispatch]=useStateValue();
  return (
    <div className='sidebar'>
                <div className='sidebar__option sidebar__option-active'>
                <Avatar />
                <h4>Ali Rasheed</h4>
                 </div>
                  <div className='sidebar__option'>
                  <Group /> 
                  <h4>Friends</h4>
                  </div>
                  <div className='sidebar__option'>
                  <Save /> 
                  <h4>Saved</h4>
                  </div>
                  <div className='sidebar__option'>
                  <Group /> 
                  <h4>Groups</h4>
                  </div>
                  <div className='sidebar__option'>
                  <Feed /> 
                  <h4>Feeds</h4>
                  </div>
                  <div className='sidebar__option'>
                  <Store /> 
                  <h4>MarketPlace</h4>
                  </div>
                  <div className='sidebar__option'>
                  <Add /> 
                  <h4>Add Center</h4>
                  </div>
                  <div className='sidebar__option'>
                  <Bloodtype /> 
                  <h4>Blood Donation</h4>
                  </div>
                  <div className='sidebar__option'>
                  <Event /> 
                  <h4>Events</h4>
                  </div>
                  <div className='sidebar__option'>
                  <Games /> 
                  <h4>Games</h4>
                  </div>
                  <div className='sidebar__option'>
                  <Message /> 
                  <h4>Message</h4>
                  </div>
                  <div className='sidebar__option'>
                  <Watch /> 
                  <h4>Watch</h4>
                  </div>
                  <div className='sidebar__option'>
                  <Memory /> 
                  <h4>Memory</h4>
                  </div>
                  <div className='sidebar__option'>
                  <Payment /> 
                  <h4>Payment</h4>
                  </div>
                  <div className='sidebar__option'>
                  <Foundation /> 
                  <h4>Foundation</h4>
                  </div>
                
    </div>
  )
}

export default Sidebar
