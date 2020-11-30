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

    <div class="backBox">
        <div class="emailIcon">
            <i class="fa fa-envelope" aria-hidden="true"></i>
        </div>
        <p class="emailTxt mx-auto d-block">We have sent an activation link to your email. Activate to start using your account</p>
    </div>

    <button class="btn mx-auto d-block" style="margin-top: 35%;" onclick="window.location='http://www.google.com'">Finish</button>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
  @import '../assets/styleToni.css';
  @import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
  @import url("https://fonts.googleapis.com/css?family=Sriracha");
  @import url("https://fonts.googleapis.com/css?family=Roboto");
</style>