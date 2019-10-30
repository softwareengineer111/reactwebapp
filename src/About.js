import React from 'react';

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



import './App.css';



function About() {
  return (
    <div >
		
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

	
    </div>
  );
}

export default About;
