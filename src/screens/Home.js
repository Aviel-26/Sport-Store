import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import Logosport from '../LogoSport2.jpg' 

export default function Home() {
  return (
    <div className="home">
       <img src={Logosport} className="logo" alt="BigCo Inc. logo" />
      <Link className='allpro' to='/allproducts' ><button className='shopnow'>Shop Now</button></Link>
    </div>
  )
}
