import React from 'react';
import './App.css';

function App() {
	return (
		<div>
			<nav class="navbar background">
				<ul class="nav-list">
					<div class="logo">
						<img src=
"https://developers.google.com/community/gdsc/images/gdsc-social-share.png" />
					</div>
					<li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href='#sponsors'>Sponsors</a></li>
					</ul>

					<div>
					<a class="bcc-btn" href="https://google.com" target="_blank" >
         	 <text>Register</text>
       				 </a>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<a class="bcc-btn" href="https://google.com" target="_blank" >
						<text>Volunteer</text>
       				 </a>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						</div>
					<div class="logo">
						<img src=
						"https://djb.com/wp-content/uploads/2020/02/Dual-Button-Flags-custom-created-SS-e1580921173396.png" />
					</div>
					
				</nav>

			<br></br>
			<br></br>
			<section class="section">
				<div class="box-main">
					<div class="firstHalf">
						<div class="text-big" >
				North-Hacks 2023
						</div>
						<p class="text-large">
				Join us on January 27th and 28th for a two day hackathon!
				<br></br>
				<br></br>
				<br></br>
				<a class="fcc-btn" href="https://google.com" target= "_blank" >
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<text>Register</text>
       				 </a>
					
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<a class="fcc-btn" href="https://google.com" target= "_blank" >	
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<text>Volunteer</text>
       				 </a>
						</p>
					</div>
				</div>
			</section>

			<br></br>
			<br></br>
			<br></br>
			<section class="section">
				<div class="box-main">
					<div class="secondHalf">
						<h1 class="text-big" id="program">
							Topics to be Discussed 
						</h1>
						<br></br>
						<p class="text-large">
							<br></br>
							- Android Dev <br></br>
							<br></br>
							- Cybersecurity <br></br>
							<br></br>
							- The Cloud <br></br>
							<br></br>
						</p>
					</div>
				</div>
			</section>

			<br></br>
			<br></br>
			<section class="section">
				<div class="box-main">
					<div class="secondHalf">
						<h1 class="text-big" id="program">
							Sponsors
						</h1>
						<br></br>
						<p class="text-large">
							<br></br>
							Northestern Illinois Univeristy <br></br>
							<br></br>
							Carleton University - Ottawa Canada <br></br>
							<br></br>
							Algonquin College - Ottawa Canada <br></br>
							<br></br>
						</p>
					</div>
				</div>
			</section>

			<br></br>
			<section class="section">
				<div class="box-main">
					<div class="secondHalf">
						<h1 class="text-big" id="program">
					The Team 
						</h1>
						<p class="text-medium">
						GDSC Lead of Northeastern University &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GDSC Lead of Algonquin College &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GDSC Lead of Carleton Univerity<br></br> 
						Amanda Rossi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Mahmoud Abdelaziz &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Samarth Wachche<br></br> 
						Amandarossi38@gmail.com &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Mahmoud.B.Abdelaziz@gmail.com &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; samarth.wachche31@gmail.com 

						</p>
					</div>
				</div>
			</section>
			<footer className="footer">
				<p className="text-footer">
				<div class="logo">
						<img src=
"https://developers.google.com/community/gdsc/images/gdsc-social-share.png" />
					</div>
					Contact Us: northhacks23@gmail.com
					<div class="logo">
						<img src=
						"https://djb.com/wp-content/uploads/2020/02/Dual-Button-Flags-custom-created-SS-e1580921173396.png" />
					</div>
				</p>
			</footer>
		</div>
	)
}

export default App
