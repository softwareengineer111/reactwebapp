import React from 'react';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ShareIcon from '@material-ui/icons/Share';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import BarChartIcon from '@material-ui/icons/BarChart';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import AppleIcon from '@material-ui/icons/Apple';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
	
	const navStyle = {
		color: 'white'
	};
	
  return (
    <nav className="nav">
		
		<h3><AppleIcon /> LOGO</h3>
		<ul className="nav-links">
			<Link style={navStyle} to='/about'>
					
				<li><h3> <ShareIcon />Share  </h3></li>
				
			</Link>
		
			<Link to='/copy' style={navStyle}>
			
				<li><h3><FileCopyIcon />Copy</h3></li>
			</Link>
			
			<Link to='/scrollbar' style={navStyle}>
			
				<li><h3><BarChartIcon />Scrollbar </h3></li>
			</Link>
			
			
			

			<Link to='/personlist' style={navStyle}>
			
				<li><h3><FindInPageIcon />Adiox Api & SnackBar</h3></li>
			</Link>
			
			<Link to='/responsive' style={navStyle}>
			
				<li><h3><MenuOpenIcon />Responsive </h3></li>
			</Link>
	
			
		</ul>
	</nav>
  );
}

export default Nav;
