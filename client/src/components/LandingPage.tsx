import React from 'react'
const brookelark = require('../assets/brooke-lark-aGjP08-HbYY-unsplash.jpg')
const rachelpark = require('../assets/rachel-park-hrlvr2ZlUNk-unsplash.jpg')
const lilybanse = require('../assets/lily-banse--YHSwy6uqvk-unsplash.jpg')
class LandingPage extends React.Component{

	render(){
		return(
			<h3>hello world</h3>
		)
	}
	renderLandingPage(){
		return(
			<div>
				<nav>
					<ul className="nav-flex-row">
						<li className="nav-item">
							<a href="#about">About</a>
						</li>
						<li className="nav-item">
							<a href="#reservation">Reservation</a>
						</li>
						<li className="nav-item">
							<a href="#menu">Menu</a>
						</li>
						<li className="nav-item">
							<a href="#shop">Shop</a>
						</li>
					</ul>
				</nav>

				<section className="section-intro">
					<header>
						<h1>Foodee</h1>
					</header>
					<div className="link-to-book-wrapper">
						<a className="link-to-book" href="#reservations">Book a table</a>
					</div>
				</section>

				<section className="about-section">
					<article>
						<h3>
								Section for the text why your restaurant is the best.
						</h3>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
							A quos, voluptatum illum mollitia dolores libero placeat 
							nesciunt quasi adipisci impedit!Lorem ipsum dolor sit, 
							amet consectetur adipisicing elit. 
							A quos, voluptatum illum mollitia dolores libero placeat 
							nesciunt quasi adipisci impedit!
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
							A quos, voluptatum illum mollitia dolores libero placeat 
							nesciunt quasi adipisci impedit!Lorem ipsum dolor sit.
						</p>
					</article>
				</section>

				<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img src={rachelpark} className="d-block w-100" alt="food"/>
						</div>
						<div className="carousel-item">
							<img src={lilybanse} className="d-block w-100" alt="food"/>
						</div>
						<div className="carousel-item">
							<img src={brookelark} className="d-block w-100" alt="food"/>
						</div>
					</div>
					<a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="sr-only">Previous</span>
					</a>
					<a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="sr-only">Next</span>
					</a>
				</div>

				<div className="container">
					<div className="row-flex">
						<div className="flex-column-form">
							<h3>
								Make a booking
							</h3>
						<form className="media-centered">
								<div className="form-group">
									<p>
										Please leave your number we will call to make a reservation
									</p>
									<input type="name" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter your name"/>
								</div>
								<div className="form-group">
									<input type="number" className="form-control" id="exampleInputphoneNumber1" placeholder="Enter your phone number"/>
								</div>
								<button type="submit" className="btn btn-primary">Submit</button>
						</form>
						</div>
						<div className="opening-time">
							<h3>
								Opening times
							</h3>
							<p>
							<span>Monday—Thursday: 08:00 — 22:00</span> 
							<span>Friday—Saturday: 09:00 — 23:00 </span>
							<span>Sunday: 10:00 — 17:00</span>
							</p>
						</div>
						<div className="contact-adress">
							<h3>
								Contact
							</h3>
							<p>
								<span>000 9283 8456</span>
								<span>15 Florida Ave</span>
								<span>Palo-Alto, 1111 CA</span>
							</p>
						</div>
					</div>
				</div>
			</div>
	// <!-- Optional JavaScript -->
	// <!-- jQuery first, then Popper.js, then Bootstrap JS -->
		)
	}
}
