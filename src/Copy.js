import React , { useRef, useState , useEffect} from 'react';
import axios from 'axios';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ReactDOM from 'react-dom';

import Button from '@material-ui/core/Button';


import { makeStyles } from '@material-ui/core/styles';
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

function Copy() {
	
	const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);
	
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
		axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
			const photos = res.data;
			setPhotos(photos);
		});
	}, []);
	
	function copyToClipboard(e) {
		textAreaRef.current.select();
		document.execCommand('copy');
		e.target.focus();
		setCopySuccess('Copied!');
	};
	
	
	
	
	return (
			<div>
			
			<ul>
		<table style={navStyle}> 
			<thead></thead>
			<tbody>
			<tr>
			
				<td style={navStyle3}><GridOnIcon /> POST ID</td>
				<td style={navStyle2}><PersonIcon /> CUS ID</td>
				<td style={navStyle2}><EmailIcon /> POST TITLE</td>
				<td style={navStyle2}><PhoneAndroidIcon />DESCRIPTION</td>
				<td style={navStyle2}><CreateIcon />COPY POST TITLE INTO CLIPBOARD</td>
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
						<td style={navStyle2}>{photo.userId}</td>
						<td style={navStyle2}>{photo.title}</td>
						<td style={navStyle2}>{photo.body}</td>
						<td style={navStyle2}>
						
					
							 <CopyToClipboard text={photo.title}>
							  <Button variant="contained" color="primary" onClick={handleClick} >COPY POST TITLE</Button>
							  
							</CopyToClipboard>
							
						
						
						</td>
					</tr>
			</tbody>
			
			</table>
			))}
	  </ul>
			
		

			
			</div>

	  );
}

export default Copy;
