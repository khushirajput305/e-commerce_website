import React from 'react'
import "./../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
const Dropdown = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
      </nav>
    </>
  )
}

export default Dropdown