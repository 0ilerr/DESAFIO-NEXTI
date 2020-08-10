import React from 'react';
import '../components-style/Navbar.css';
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";


const Navigation = (props) => {
    console.log(props);
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
            <div class="collapse navbar-collapse" id="navbarsExample08">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <Link class="nav-link" to="/produto/index">Listar</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/produto/form">Criar</Link>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navigation);