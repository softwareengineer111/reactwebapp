import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ShareIcon from '@material-ui/icons/Share';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import BarChartIcon from '@material-ui/icons/BarChart';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import {Link} from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';

import './App.css';

const useStyles = makeStyles({
  root: {
	width: 1800,
	backgroundColor: '#5C5654',
	color: 'white'
	

  }
});

function Bottomnavigation() {
	const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const navStyle = {
		color: 'white'
	};

  return (
  
	 <div className="bottom">
	
		
				
							<BottomNavigation value={value} onChange={handleChange} className={classes.root} style={navStyle}>
								<Link to='/about' style={navStyle}>
									
									<BottomNavigationAction label="Recents" value="recents" icon={<ShareIcon />} style={navStyle} /> 
									Share Page
								</Link>
						
								<Link to='/copy' style={navStyle}>
									
									<BottomNavigationAction label="Nearby" value="nearby" icon={<FileCopyIcon />} style={navStyle} />
									Copy to Clipboard
								</Link>
								<Link to='/scrollbar' style={navStyle}>
									
									<BottomNavigationAction label="Folder" value="folder" icon={<BarChartIcon />} style={navStyle} />
									Scrollbar
								</Link>
								
								<Link to='/personlist' style={navStyle}>
									
									<BottomNavigationAction label="Folder" value="folder" icon={<FindInPageIcon />} style={navStyle} />
									Adiox Api & SnackBar Button
								</Link>
								
								<Link to='/responsive' style={navStyle}>
									
									<BottomNavigationAction label="Folder" value="folder" icon={<MenuOpenIcon />} style={navStyle} />
									Responsive
								</Link>
								
								
							</BottomNavigation>
		
				
		
    </div>
  
  
    
  );
	
}

export default Bottomnavigation;
