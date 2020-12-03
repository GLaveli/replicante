import React from 'react';
import { Link } from 'react-router-dom';
import { ImHome3, ImSvg, ImFire, ImSpinner9 } from 'react-icons/im';
import imagEye from '../../images/eye.png';

import "./styles.css";

function Navbar() {
  return (
    <>
      <div className="header_container">
        <input type="checkbox" id="check" />

        <header>
          <label for="check" >\
          <i class="fas fa-bars" id="sidebar_btn"></i>
          </label>
          <div className="left_area">
            <h3> <span>Red</span>pill</h3>
          </div>
          <div className="rig_area">
            <a href="/" className="logout_btn">Logout</a>
          </div>
        </header>

        <div className="sidebar">

          <center className="center_image_checked" >
            <img src={imagEye} className="menu_image" alt="imgTopo" />
          </center>

          <div className="itemContainer">
            <Link to="/covid" ><i className="fas fa-biohazard"></i><span>Covid-19</span></Link>
            <a href=" " ><i className="fas fa-cogs"></i><span>Menu 01</span></a>
            <a href=" " ><i className="fas fa-table"></i><span>Menu 01</span></a>
            <a href=" " ><i className="fas fa-th"></i><span>Menu 01</span></a>
            <a href=" " ><i className="fas fa-info-circle"></i><span>Menu 01</span></a>
            <a href=" " ><i className="fas fa-sliders-h"></i><span>Menu 01</span></a>
            <a href=" " ><i className="fas fa-desktop"></i><span>Menu 01</span></a>
            <a href=" " ><i className="fas fa-cogs"></i><span>Menu 01</span></a>
            <a href=" " ><i className="fas fa-table"></i><span>Menu 01</span></a>
            <a href=" " ><i className="fas fa-th"></i><span>Menu 01</span></a>
            <a href=" " ><i className="fas fa-info-circle"></i><span>Menu 01</span></a>
            <a href=" " ><i className="fas fa-sliders-h"></i><span>Menu 01</span></a>
            <a href=" " ><i className="fas fa-desktop"></i><span>Menu 01</span></a>
            <a href=" " ><i className="fas fa-cogs"></i><span>Menu 01</span></a>
            <a href=" " ><i className="fas fa-table"></i><span>Menu 01</span></a>
            <a href=" " ><i className="fas fa-th"></i><span>Menu 01</span></a>
            <a href=" " ><i className="fas fa-info-circle"></i><span>Menu 01</span></a>
            <a href=" " ><i className="fas fa-sliders-h"></i><span>Menu 01</span></a>
            <a href=" " ><i className="fas fa-desktop"></i><span>Menu 01</span></a>
            <a href=" " ><i className="fas fa-cogs"></i><span>Menu 01</span></a>
            <a href=" " ><i className="fas fa-table"></i><span>Menu 01</span></a>
            <a href=" " ><i className="fas fa-th"></i><span>Menu 01</span></a>
            <a href=" " ><i className="fas fa-info-circle"></i><span>Menu 01</span></a>
            <a href=" " ><i className="fas fa-sliders-h"></i><span>Menu 01</span></a>
            <a href=" " ><i className="fas fa-desktop"></i><span>Menu 01</span></a>
            <a href=" " ><i className="fas fa-cogs"></i><span>Menu 01</span></a>
            <a href=" " ><i className="fas fa-table"></i><span>Menu 01</span></a>
            <a href=" " ><i className="fas fa-th"></i><span>Menu 01</span></a>
            <a href=" " ><i className="fas fa-info-circle"></i><span>Menu 01</span></a>
            <a href=" " ><i className="fas fa-sliders-h"></i><span>Menu 01</span></a>

          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

