import React , {useState , useEffect }from 'react';
import './App.css';

import { Link } from 'react-router-dom';

function ItemDetail({match}) {
	
	useEffect(() => { 
		fetchItem();
		
		console.log(match);
	}, []);
	
	const [items , setItems] = useState({
		
		images: {}
	});
	
	const fetchItem = async () => {
		const fetchItem = await fetch(`https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=${match.params.id}`);
		const item = await fetchItem.json();
		
		setItems(item);
		
		console.log(item);
	}
	

	
  return (
    <div>
		<h1>{items.name}</h1>
		<img src ={items.images.transparent}></img>
    </div>
  );
}

export default ItemDetail;
