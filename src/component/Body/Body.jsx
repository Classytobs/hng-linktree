import React from 'react'
import './Body.css'
import profileimg from '../../Img/profileimg.jpeg'
import Avatar from '../../Img/Avatar.png'
import avatarmb from '../../Img/avatarmb.png'
import slack from '../../Img/slack.svg'
import github from '../../Img/github.svg'
import Links from '../Links/Links'

export default function Body() {
  return (
    <div className='task'>
      <div className='main'>
        <div className='content'>
          <div className='profile'>
            <img className='profileimg'src={profileimg}  alt ="profileimg" id="profile__img" />
            <div className='twitter' id='twitter'><h3>Engr_Tobs</h3></div>
            <div className='slack' id='slack'>Classytobs</div>
          </div>
          <img className='avatar' src={Avatar}></img>
          <img className='avatarmb' src={avatarmb}></img>
          
          <Links />
        </div>
      </div>
      <div className='social'>
          <div className='container'>
          <a
          id="slack"
          href="https://app.slack.com/client/T042F7V19Q8/C041V6WKAUS/rimeto_profile/U047YHWQXSB"
          target="_blank"
          rel="noreferrer"><img  src={slack}/></a>
              <a
          id="github"
          href="https://github.com/Classytobs"
          target="_blank"
          rel="noreferrer"
        ><img src={github} target="_blank"
        rel="noreferrer"/></a>
            </div>
      </div>
      
    </div>
  )
}
