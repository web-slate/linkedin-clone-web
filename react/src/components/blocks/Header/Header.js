import React from 'react'
import Logo from './Logo/Logo'
import SearchForm from './SearchForm/SearchForm'
import MainMenu from './MainMenu/MainMenu'

const Header = () => {
  return (
    <>
      <header id="main-header">
        <div>
          <div>
            <Logo />
            <SearchForm />
            <span className="fas fa-comments"></span>
          </div>
          <MainMenu />
        </div>
      </header>
    </>
  )
}

export default Header
