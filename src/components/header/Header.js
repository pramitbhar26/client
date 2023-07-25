import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <header>
    <div className='header'>
      {/* <button className='header-button'>
      <i class="fa-solid fa-bars"></i>
      </button>
    <i class="fa-solid fa-file" style={{color: "#000000",}} size="3xl"></i> */}
         <i class="fa-solid fa-bars"></i> 
        <h1 className='heading'>Beta Docs</h1>
        <div className='search'>
        <input
          type='text'
          placeholder='Search' 
          className='header-search'
          />
        </div>
      <button className='login-button'>Sign in</button>
    </div>
    </header>
  )
}

export default Header