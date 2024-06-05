import React from 'react'
import logo from '../../Assets/logo.webp'
import './Navbar.css'

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg">
      <div class="container-fluid">
        <img src={logo} alt="JasminRenovLogo" />
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Nos services
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="#">Pour les particuliers</a></li>
                <li><a class="dropdown-item" href="#">Pour les professionnels</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                À propos de nous
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="#">Nos réalisations</a></li>
                <li><a class="dropdown-item" href="#">Avis clients</a></li>
                <li><a class="dropdown-item" href="#">Nos zones d’intervention</a></li>
                <li><a class="dropdown-item" href="#">Nos fournisseurs</a></li>
              </ul>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">FAQ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar