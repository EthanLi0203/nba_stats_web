import { useState , useEffect} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import {API} from '../config'
import { APP_NAME } from '../config';
import Player from '../components/Player'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import '../node_modules/nprogress/nprogress.css';

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState({
    loading: false,
    show: false,
    error: false,
    playerName: '',
    photo: '',
    Names: []
});

const {loading, show, error, playerName, photo, Names} = value;
const showLoading = () => (loading ? <div className="alert alert-info">Loading...</div> : '');



const handleChange =  name => e => {

    const n = splitName(e.target.value)
    setValue({...value, error: false, [name]: e.target.value, Names: n });
};

const splitName = (name) => {
  if(name !== undefined){
    return name.split(' ');
  }
}


const showPlayerPhoto = () => {
    return (
       <img src={`${API}/players/${Names[1]}/${Names[0]}`} className="img img-fluid featured-image"></img>

    )    
}



  return (
    <div>
    <Nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">NBA Static</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/league/trend">League Trend <span className="sr-only">(current)</span></a>
        </li>
        
      </ul>
     
    </div>
  </Nav>
  <br/>
  {Names}
  {show && showPlayerPhoto}

  </div>
  );
};

export default Header;
