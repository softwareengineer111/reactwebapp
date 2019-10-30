import React , {useState , useEffect }from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';


import axios from 'axios';


import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  RedditShareButton,
  TumblrShareButton,
  ViberShareButton,
  InstapaperShareButton,
  EmailShareButton,
} from 'react-share';


import {
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
  TumblrIcon,
  ViberIcon,
  InstapaperIcon,
  EmailIcon,
} from 'react-share';

import ShareIcon from '@material-ui/icons/Share';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import BarChartIcon from '@material-ui/icons/BarChart';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import FindInPageIcon from '@material-ui/icons/FindInPage';

import './App.css';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Responsive(props) {
	
	const navStyle = {
		color: 'white'
	};
	
	const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
	
	  
        {['Home', 'Copy', 'Responsive', 'Api'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
     
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
     
			<ul className="nav-responsive-links">
			<Link style={navStyle} to='/about'>
				<li className="nav-responsive-item-links"><h3><ShareIcon /> Share</h3></li>
			</Link>
	
			
			<Link to='/copy' style={navStyle}>
				<li className="nav-responsive-item-links"><h3><FileCopyIcon /> Copy</h3></li>
			</Link>
			
			<Link to='/scrollbar' style={navStyle}>
				<li className="nav-responsive-item-links"><h3><BarChartIcon />Scrollbar</h3></li>
			</Link>
			
			
			
			<Link to='/personlist' style={navStyle}>
				<li className="nav-responsive-item-links"><h3><FindInPageIcon /> Adiox Api & Snackbar</h3></li>
			</Link>
			
			<Link to='/responsive' style={navStyle}>
				<li className="nav-responsive-item-links"><h3><MenuOpenIcon />Responsive</h3></li>
			</Link>
			
		</ul>
			
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        
		<h1>Share Page</h1>
		<div className = "scrollbar">
			<FacebookShareButton
				url="https://www.facebook.com/zuck"
				title="Facebook Share"
				className="nav-links">
				<FacebookIcon
				  size={160}
				  round />
			</FacebookShareButton>
			
			<TwitterShareButton
				url="https://www.facebook.com/zuck"
				title="Facebook Share"
				className="nav-links">
				<TwitterIcon
				  size={160}
				  round />
			</TwitterShareButton>
			
			
			
			<WhatsappShareButton
				url="https://www.facebook.com/zuck"
				title="Whats App Share"
				className="nav-links">
				<WhatsappIcon
				  size={160}
				  round />
			</WhatsappShareButton>
			
			<TelegramShareButton
				url="https://www.facebook.com/zuck"
				title="Facebook Share"
				className="nav-links">
				<TelegramIcon
				  size={160}
				  round />
			</TelegramShareButton>
		
			<PinterestShareButton
				url="https://www.facebook.com/zuck"
				title="Facebook Share"
				className="nav-links">
				<PinterestIcon
				  size={160}
				  round />
			</PinterestShareButton>
			
			
		
		
		</div>
		
		
		<div className = "scrollbar2">
			
			<RedditShareButton
				url="https://www.facebook.com/zuck"
				title="Facebook Share"
				className="nav-links">
				<RedditIcon
				  size={160}
				  round />
			</RedditShareButton>
		
			<TumblrShareButton
				url="https://www.facebook.com/zuck"
				title="Facebook Share"
				className="nav-links">
				<TumblrIcon
				  size={160}
				  round />
			</TumblrShareButton>
			
			<ViberShareButton
				url="https://www.facebook.com/zuck"
				title="Facebook Share"
				className="nav-links">
				<ViberIcon
				  size={160}
				  round />
			</ViberShareButton>
		
			<InstapaperShareButton
				url="https://www.facebook.com/zuck"
				title="Facebook Share"
				className="nav-links">
				<InstapaperIcon
				  size={160}
				  round />
			</InstapaperShareButton>
			
			<EmailShareButton
				url="https://www.facebook.com/zuck"
				title="Facebook Share"
				className="nav-links">
				<EmailIcon
				  size={160}
				  round />
			</EmailShareButton>
		
			</div>
   
      </main>
    </div>
  );
}

Responsive.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default Responsive;
