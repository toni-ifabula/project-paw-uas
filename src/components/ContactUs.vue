<template>
    <div id="app">
        <nav class="navbar navbar-custom navbar-expand-sm">
        <img src="@/assets/logo.png" width="50" height="50" alt="">
        <p class="navbar-brand-custom" style="margin:0rem 1rem">Yuk Titip</p>
        <ul class="navbar-nav ml-auto"> 
            <li class="nav-item"> 
                <a class="nav-link" style="color: white; margin:0.5rem" href="#"> 
                  Home 
                </a> 
            </li> 
            <li class="nav-item"> 
                <a class="nav-link" style="color: white; margin: 0.5rem" href="contactUs.html"> 
                  Contact Us
                </a> 
            </li> 
            <li class="nav-item"> 
                <a class="nav-link" style="color: white; margin: 0.5rem" href="aboutUs.html"> 
                  About Us 
                </a> 
            </li> 
            <li class="nav-item"> 
                <a class="nav-link" href="aboutUs.html"> 
                  <i class="fa fa-user fa-2x" aria-hidden="true" 
                        style="color: white; margin:0rem 1rem"></i> 
                </a> 
            </li> 
        </ul>  
    </nav>

    <div class="container" style="width:60%">
        <h1 style="margin: 1rem 0rem; font-weight: bold">Contact Us</h1>

        <form action="">
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputFirstName">Nama Depan</label>
                    <input type="text" class="form-control" id="inputFirstName" placeholder="Nama Depan">
                </div>
                <div class="form-group col-md-6">
                    <label for="inputLastName">Nama Belakang</label>
                    <input type="text" class="form-control" id="inputLastName" placeholder="Nama Belakang">
                </div>
            </div>
            <div class="form-group">
                <label for="inputOrg">Email</label>
                <input type="email" class="form-control" id="inputEmail" placeholder="Email">
            </div>
            <div class="form-group">
                <label for="inputPhone">Nomor Telepon</label>
                <input type="number" class="form-control" id="inputPhone" placeholder="08xxxxxxxxxx">
            </div>
            <div class="form-group">
                <label for="txtMessage">Message</label>
                <textarea class="form-control" id="txtMessage" rows="10" placeholder="Message"></textarea>
            </div>
            <button type="submit" class="btn">Submit</button>
        </form>
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