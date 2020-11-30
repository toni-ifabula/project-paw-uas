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

    <div class="container" style="width: 60%">

        <div>
            <img src="@/assets/profile.png" class="mx-auto d-block rounded-circle" alt="Cinque Terre" style="margin-top: 1rem;">
        </div>

        <div style="margin: 1rem 0rem;">
            <button onclick="window.location='http://www.google.com'" class="btn mx-auto d-block">Change Photo</button>
        </div>

        <form action="">
            <div class="form-group row">
                <label for="inputNama" class="col-sm-3 col-form-label">Nama</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" id="inputNama" readonly>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputTgl" class="col-sm-3 col-form-label">Tanggal Lahir</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" id="inputTgl" readonly>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputJK" class="col-sm-3 col-form-label">Jenis Kelamin</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" id="inputJk" readonly>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputEmail" class="col-sm-3 col-form-label">Email</label>
                <div class="col-sm-9">
                    <input type="email" class="form-control" id="inputEmail" readonly>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputTelp" class="col-sm-3 col-form-label">No. Telp</label>
                <div class="col-sm-9">
                    <input type="number" class="form-control" id="inputTelp" readonly>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputProv" class="col-sm-3 col-form-label">Provinsi</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" id="inputProv" readonly>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputAlamat" class="col-sm-3 col-form-label">Alamat</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" id="inputAlamat" readonly>
                </div>
            </div>

            <div style="margin: 1rem 0rem;">
                <button type="submit" class="btn mx-auto d-block">Change Profile</button>
            </div>
            
        </form>
    </div>  
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