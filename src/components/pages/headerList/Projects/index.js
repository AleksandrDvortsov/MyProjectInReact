import React from 'react';
import { NavLink } from 'react-router-dom'
import './style.scss';

function Projects() {


    return (
        <div id="Projects">

            <div className="page">
                {/* <h2>Projects</h2> */}
                {/* <ul id="menu_Project"> */}
                {/* <li><NavLink to="/project/iss">ISS</NavLink></li> */}
                {/* <li><NavLink to="/project/weather">Weather</NavLink></li> */}
                {/* </ul> */}
                <ul className="tilesWrap">
                    <li className='li-1'>
                        <h2>1</h2>
                        <h3>International Space Station</h3>
                        <p>Using api. In real time, the coordinates of the International Space Station are displayed on Google maps. </p>
                        <NavLink id='navlink-1' to="/project/iss">View application</NavLink>
                    </li>

                    <li className='li-2'>
                        <h2>2</h2>
                        <h3>Weather</h3>
                        <p>The application displays the weather. Request by api on weatherbit.</p>
                        <NavLink id='navlink-2' to="/project/weather">View application</NavLink>
                    </li>

                    <li className='li-1'>
                        <h2>3</h2>
                        <h3>xz</h3>
                        <p>The application displays the weather. Request by api on weatherbit.</p>
                        {/* <NavLink id='navlink-3' to="/project/weather">View application</NavLink> */}
                    </li>

                    <li className='li-2'>
                        <h2>4</h2>
                        <h3>xz</h3>
                        <p>The application displays the weather. Request by api on weatherbit.</p>
                        {/* <NavLink id='navlink-4' to="/project/weather">View application</NavLink> */}
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Projects;
