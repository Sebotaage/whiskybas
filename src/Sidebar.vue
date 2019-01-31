<template>
	<div>

		<div class="sidenav">
		<!--img src="./whisky.jpg" class="whiskyImage"-->
		  <router-link class="a" to="/collection">Collection</router-link>
		  <router-link class="a" to="/add">Add more</router-link>
          <router-link class="a" to="/">Home</router-link>
		  <router-link class="a" to>Systemet</router-link>
		  <router-link class="a" to>Contact</router-link>
		</div>
	</div>
</template>

<style>
	.sidenav {
    height: 110px; /* Full-height: remove this if you want "auto" height */
    width: 100%; /* Set the width of the sidebar */
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    background-color: #111; /* Black */
    overflow-x: hidden; /* Disable horizontal scroll */
    transition: 0.2s;
}

.sidenav:hover {
	filter: brightness(130%);
    height:120px;
    padding-top:10px;
	transition: 0.2s;
    box-shadow: 0px 1px 0px 0px #fff;
}
/* The navigation menu links */
.a {
    margin-top:35px;
    margin-left:10px;
     margin-right:10px;
    padding: 5px 20px 5px 20px;
    transition: 0.2s;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: inline-block;
    border-top:1px solid #333;
    border-bottom:1px solid #333;
   text-align:center;
}

/* When you mouse over the navigation links, change their color */
.a:hover {
    filter: brightness(130%);
    transform: scale(1.05);
    transition: 0.2s;
}

.whiskyImage {
    
    width: 100px;
    height: 100px;
    padding:5px;
    box-shadow: 0px 3px 10px #666;
    margin-top:20px;
}
</style>