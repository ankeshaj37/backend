import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
 
  return (
    <>
      <nav id="sidebar">
   
      <div className='flaxx'>
   <div class="sidebar_blog_1">
          <div class="sidebar-header">
            <div class="logo_section">
              <img src='https://res.cloudinary.com/dj1gcouh3/image/upload/v1669876857/imgpsh_fullsize_anim_yttmy6.png' />
            </div>
          </div>
          <div class="sidebar_user_info">
            <div class="user_profle_side">
              <div class="user_info">
                <h1>iEveEra Times</h1>
                <p><span class="online_animation"></span> Online</p>
              </div>
            </div>
          </div>
        </div>
           </div>
        <div class="sidebar_blog_2">
         <a href='/'>
         <h4>Admin Panal</h4>
         </a>
          <ul class="list-unstyled components">
            <li>
              <Link to='/dashboard'>Dashboard</Link>
            </li>
            <li>
              <Link to='/setting'>Setting</Link>
            </li>
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
            <li>
              <Link to='/total'>Totale News</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar