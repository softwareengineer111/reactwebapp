import React, {useState , useEffect}from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import GridOnIcon from '@material-ui/icons/GridOn';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MoreIcon from '@material-ui/icons/More';
import CreateIcon from '@material-ui/icons/Create';


import './App.css';

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5),
  },
}));


function Personlist() {
	
	const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
	
	const [photos , setPhotos] = useState([]);
	
	const navStyle = {
		width: 1500
	};
	
	const navStyle2 = {
		width: 300
	};
	
	const navStyle3 = {
		width: 100
	};
	
	useEffect(() => {
		axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
			const photos = res.data;
			setPhotos(photos);
		});
	}, []);

	
	
  return (
  
	
	
    <div>
      
      <ul>
		<table style={navStyle}> 
			<thead></thead>
			<tbody>
			<tr>
			
				<td style={navStyle3}><GridOnIcon /> </td>
				<td style={navStyle2}><PersonIcon /> NAME</td>
				<td style={navStyle2}><EmailIcon /> EMAIL</td>
				<td style={navStyle2}><PhoneAndroidIcon />PHONE</td>
				<td style={navStyle2}><CreateIcon />ACTION</td>
			</tr>
			</tbody>
			
		</table>
	  </ul>
	  <ul>
	  {
		  photos.map(photo => 
			(
			<table style={navStyle}> 
			<thead></thead>
			
			<tbody>
					<tr>
					
						<td style={navStyle3} key={photo.id}>{photo.id}</td>
						<td style={navStyle2}>{photo.name}</td>
						<td style={navStyle2}>{photo.email}</td>
						<td style={navStyle2}>{photo.phone}</td>
						<td style={navStyle2}>
						
						<Button onClick={handleClick} variant="contained" color="primary" >Snackbar Button</Button>
							  <Snackbar
								anchorOrigin={{
								  vertical: 'bottom',
								  horizontal: 'center',
								}}
								open={open}
								autoHideDuration={6000}
								onClose={handleClose}
								ContentProps={{
								  'aria-describedby': 'message-id',
								}}
								message={<span id="message-id">Here is Snackbar</span>}
								action={[
								  <Button key="undo" color="secondary" size="small" onClick={handleClose}>
									UNDO
								  </Button>,
								  <IconButton
									key="close"
									aria-label="close"
									color="inherit"
									className={classes.close}
									onClick={handleClose}
								  >
									<CloseIcon />
								  </IconButton>,
								]}
							  />
						
						</td>
					</tr>
			</tbody>
			
			</table>
			))}
	  </ul>
       
    </div>
  );
}



export default Personlist;
