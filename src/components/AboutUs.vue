<template>
  <div id="app">
    <nav class="navbar navbar-custom navbar-expand-sm">
        <img src="@/assets/logo.png" width="50" height="50" alt="">
        <p class="navbar-brand-custom" style="margin:0rem 1rem">Yuk Titip</p>
        <ul class="navbar-nav ml-auto"> 
            <li class="nav-item"> 
                <a class="nav-link" style="color: white;" href="#"> 
                  Home 
                </a> 
            </li> 
            <li class="nav-item"> 
                <a class="nav-link" style="color: white;" href="contactUs.html"> 
                  Contact Us
                </a> 
            </li> 
            <li class="nav-item"> 
                <a class="nav-link" style="color: white;" href="aboutUs.html"> 
                  About Us 
                </a> 
            </li> 
            <li class="nav-item"> 
                <button class="btn" type="submit" style="margin-right: 1rem">Login</button>
            </li> 
            <li class="nav-item"> 
                <button class="btn" style="background-color: #F3C94A;" type="submit">Sign Up</button>
            </li> 
        </ul> 
    </nav>

    <div class="hero-image">
        <div class="hero-text">
            <h1 style="font-size: 50px; font-weight: bold">Yuk Titip</h1>
            <p style="font-family: 'Roboto'; font-size: larger;">Yuk titip adalah platform penyedia jasa titip beli barang yang dijual diluar negeri. <br>
                Kami ada untuk mewujudkan keinginan anda. </p>
        </div>
    </div>

    <div class="card-container">
        <h1 class="pelayanan">Pelayanan Kami</h1>
        <div class="row">
            <div class="col-sm">
                <div class="card text-center w-75" style="left: 5rem; margin-top: 10rem;">
                    <div class="card-icon">
                        <i class="fa fa-list-alt" aria-hidden="true"></i>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title" style="font-weight:bold">Customizable</h5>
                        <p class="card-text">Setiap pesanan dapat anda atur sesuai keinginan</p>
                    </div>
                </div>
            </div>
            <div class="col-sm">
                <div class="card text-center w-75" style="left: 4rem; margin-top: 10rem;">
                    <div class="card-icon">
                        <i class="fa fa-plane" aria-hidden="true"></i>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title" style="font-weight:bold">Fast</h5>
                        <p class="card-text">Barang dapat sampai lebih cepat dari jasa pengiriman barang</p>
                    </div>
                </div>
            </div>
            <div class="col-sm">
                <div class="card text-center w-75" style="left: 3rem; margin-top: 10rem;">
                    <div class="card-icon">
                        <i class="fa fa-handshake-o" aria-hidden="true"></i>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title" style="font-weight:bold">Reliable</h5>
                        <p class="card-text">Kami dapat memastikan barang anda sampai tujuan dengan baik</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="footer">
        <div class="row">
            <div class="col-sm-3" style="margin-top: 3rem;">
                <img src="@/assets/footerLogo.png" style="margin-left: 5.5rem;">
            </div>
            <div class="col-sm-3" style="margin-top: 2rem;">
                <h4 style="font-weight:bold; color:white">Explore More</h4>
                <br>
                <a style="color: white;" href="#">Home</a>
                <br><br>
                <a style="color: white;" href="contactUs.html">Contact Us</a>
                <br><br>
                <a style="color: white;" href="aboutUs.html">About Us</a>
            </div>
            <div class="col-sm-3" style="margin-top: 2rem;">
                <h4 style="font-weight:bold; color:white">Contact</h4>
                <br>
                <p style="color:white">YukTitip@uajy.ac.id</p>
                <p style="color:white">(+62)81123456789</p>
            </div>
            <div class="col-sm-3" style="margin-top: 2rem;">
                <h4 style="font-weight:bold; color:white">Visit Us</h4>

                <div id="map"></div>

            </div>
        </div>
    </div>
  </div>

</template>

<script>
import mapboxgl from "mapbox-gl";

export default {
  name: 'App',
  data() {
    return {
      accessToken: 'pk.eyJ1IjoidG9uaTYxMiIsImEiOiJja2ZremZpZjIxMHI4MnBtanJydWo5MDlkIn0.zbCKkpFCaRWr-WJ3Tboc5g',
    };
  },

  mounted() {
    mapboxgl.accessToken = this.accessToken;

    var map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [110.415981, -7.779415],
      zoom: 14,
    });

    new mapboxgl.Marker()
  .setLngLat([110.415981, -7.779415])
  .addTo(map);
    
  },
}
</script>

<style>
  @import '../assets/styleToni.css';
  @import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
  @import url("https://fonts.googleapis.com/css?family=Sriracha");
  @import url("https://fonts.googleapis.com/css?family=Roboto");
</style>
