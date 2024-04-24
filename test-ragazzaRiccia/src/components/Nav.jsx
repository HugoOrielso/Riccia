import React from 'react'
import logo from '/Images/logo.webp'
import '/public/css/nav.css'


const Nav = () => {
  return (
    <header className='header'>
        <div>
            <img src={logo} alt="Logo La Ragazza Riccia" />
        </div>

        <nav>
          <h1> La Ragazza Riccia</h1>
        </nav>

    </header>
  )
}

export default Nav