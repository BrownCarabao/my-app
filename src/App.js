import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faUser, faImages, faAddressCard, faIdCardAlt,} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <div className="wrapper">
        <div className="header">
        <ul className="nav-bar">
          <li className="icons">
              <a href="" target="blank"><FontAwesomeIcon icon='home' />
              <span>Home</span></a>
          </li>
          <li className="icons">
              <a href=""><FontAwesomeIcon icon='user' />
              <span>Profile</span></a>
          </li>
          <li className="icons">
              <a href=""><FontAwesomeIcon icon='images  ' />
              <span>Galleries</span></a>
          </li>
          <li className="icons">
              <a href=""><FontAwesomeIcon icon='address-card' />
              <span>About Us</span></a>
          </li>
          <li className="icons">
              <a href=""><FontAwesomeIcon icon='id-card-alt' />
              <span>Contact Us</span></a>
          </li>
        </ul>
      </div>
      <hr/>
      <div className="content-container">
        <div className="content-1">
          <div className="form-1">
            <form>
              <div className="form-group">
                <label>Email address</label>
                <div>
                  <input className="input-field" placeholder="Enter email"/>
                </div>
              </div>
              <div className="form-group">
                  <label>User name</label>
                  <div>
                    <input className="input-field" placeholder="User name"/>
                  </div>
                </div>
              <div className="form-group">
                <label>Password</label>
                <div>
                  <input className="input-field" placeholder="Password"/>
                </div>
              </div>
              <div>
                <a href="">Forgot Password?</a>
              </div>
                <div className="submit-btn">
                  <button id="submit-btn" type="submit" >Submit</button>
                  <button id="cancel-btn" type="submit" >Cancel</button>
                </div>
            </form>
          </div>
        </div>
        <div className="content-1 map">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                <a href="https://www.pureblack.de">Pureblack.de - Webseite erstellen lassen</a>
              </div>
            </div>
        </div>
      </div>
      <div className="content-container">
        <div className="text-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div classNameclassName="text-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. Elit ut aliquam purus sit amet luctus venenatis lectus. Vitae proin sagit.
          At lectus urna duis convallis convallis tellus. Hac habitasse platea dictumst quisque. Sed viverra ipsum nunc aliquet bibendum enim. Quis imperdiet massa tincidunt nunc pulvinar sapien. 
        </div>
        <div classNameclassName="text-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra massa massa ultricies mi quis hendrerit. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in.
          Ut diam quam nulla porttitor massa id. Consectetur adipiscing elit duis tristique sollicitudin. Dui accumsan sit amet nulla facilisi morbi. Lacus vestibulum sed arcu non odio euismod lacinia.
        </div>
      </div>
      <div classNameclassName="content-container">
        <div classNameclassName="flip-card">
          <div classNameclassName="flip-card-inner">
            <div classNameclassName="flip-card-front">
              <h1>Neil Kenneth A. Genotiva</h1>
            </div>
            <div classNameclassName="flip-card-back">
              <h1>Handsome</h1> 
              <p>Friendly</p> 
              <p>Boy Next Door</p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h1>Val Vincent Montesclaros</h1>
            </div>
            <div className="flip-card-back">
              <h1>Double Blade</h1> 
              <p>Nice Guy</p> 
              <p>Basted</p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h1>Edward Kevin Louis Borbon</h1>
            </div>
            <div className="flip-card-back">
              <h1>Tomas</h1> 
              <p>Mr. Yoso</p> 
              <p>Guitar Thief</p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h1>Claro Antonio Zamesa</h1>
            </div>
            <div class="flip-card-back">
              <h1>Nice Person</h1> 
              <p>Will give me a laptop</p> 
              <p>We love Her</p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h1>Jon Miguel Lindo</h1>
            </div>
            <div className="flip-card-back">
              <h1>Ate my Butter Coconut</h1> 
              <p>Ngulbo lover</p> 
              <p>Nice Guy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="fixed-bottom ">
      <footer>
          <span>Copyright © Waway Cute | Waway Pogi All Rights Reserved.</span>
      </footer>
    </div>
  </div>
  );
}

library.add(faHome, faUser, faImages, faAddressCard, faIdCardAlt,)

export default App;
