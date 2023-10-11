import React from 'react'
import logo1 from './logo1.png';
import { BrowserRouter,Router,Routes,Link } from 'react-router-dom';
//import home from './home.jpg';
 function Sidebar() {
  return (
    <>
    <div className='col-md-3 menu'>
     <div className='logodiv'>
     <i class="fa-solid fa-bars"></i>
     <img src={logo1} alt="no"  height="px" width="px"/>
     </div>
     <hr></hr>
     <div className='main'>
      <ul>
        <span>
      <i class="fa-solid fa-house"></i></span>
      <li id="home">Home</li>
      <span><i class="fa-solid fa-film"></i></span>
        <li>Shorts</li>
        <span><i class="fa-solid fa-briefcase"></i></span>
        <li>Subscriptions</li>
      </ul>
      <hr></hr>
      <ul>
        <span><i class="fa-solid fa-photo-film"></i></span>
        <li>Library</li>
        <span><i class="fa-solid fa-timeline"></i></span>
        <li>history</li>
        <span><i class="fa-solid fa-clock"></i></span>
        <li>Watch Later</li>
        <span><i class="fa-solid fa-thumbs-up"></i></span>
        <li>Liked Videos</li>
      </ul>
      <hr></hr>
      <ul>
        <h3><p>Subscriptions</p></h3>
        <span><i class="fa-solid fa-microchip"></i></span>
        <li>mummy lab vachaa</li>
        <span><i class="fa-solid fa-plus"></i></span>
        <li>mummy padukumtunna</li>
      </ul>

      <hr></hr>
      <ul>
        <h3><p>Explore</p></h3>
        <span><i class="fa-solid fa-user-circle"></i></span>
        <li>Trending</li>
        <span><i class="fa-solid fa-shopping-cart"></i></span>
        <li>Shopping</li>
        <span><i class="fa-solid fa-music"></i></span>
        <li>Music</li>
        <span><i class="fa-solid fa-film"></i></span>
        <li>Films</li>
        <span><i class="fa-solid fa-television"></i></span>
        <li>Live</li>
        <span><i class="fa-solid fa-gamepad"></i></span>
        <li>Gaming</li>
        <span><i class="fa-solid fa-newspaper"></i></span>
        <li>News</li>
        <span><i class="fa-solid fa-trophy"></i></span>
        <li>Sport</li>
        <span><i class="fa-solid fa-graduation-cap"></i></span>
        <li>Learing</li>
        <span><i class="fa-solid fa-user-circle"></i></span>
        <li>Fashion & beauty</li>
        <span><i class="fa fa-podcast"></i></span>
        <li>Podcasts</li>
      </ul>
     </div>
    </div>
    </>


  );
}

export default Sidebar;