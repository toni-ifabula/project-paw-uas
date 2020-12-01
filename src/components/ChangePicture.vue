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
                <a class="nav-link" style="color: white; margin: 0.5rem" href="/ContactUs"> 
                  Contact Us
                </a> 
            </li> 
            <li class="nav-item"> 
                <a class="nav-link" style="color: white; margin: 0.5rem" href="/AboutUs"> 
                  About Us 
                </a> 
            </li> 
            <li class="nav-item"> 
                <a class="nav-link" href="/ProfileUser"> 
                  <i class="fa fa-user fa-2x" aria-hidden="true" 
                        style="color: white; margin:0rem 1rem"></i> 
                </a> 
            </li> 
        </ul>  
    </nav>

    <div class="container">

        <!-- <?php
            $q = mysqli_query($con,"SELECT * FROM users where id=1");
            while($row = mysqli_fetch_assoc($q)){
                if($row['image'] == ""){
                    echo "<img src='profile_images/default.png' class='mx-auto d-block rounded-circle' alt='Cinque Terre' style='margin-top: 1rem;'>";
                } else {
                    echo "<img width='200' height='200' src='profile_images/".$row['image']."' class='mx-auto d-block rounded-circle' alt='Cinque Terre' style='margin-top: 1rem;'>";
                }
                echo "<br>";
            }
        ?> -->

        <div style="margin: 2rem 23rem;">
            <form action="" method="post" enctype="multipart/form-data">
                <input type="file" name="file" id="image">
                <input type="submit" name="submit" id="insert">
            </form> 
        </div>

        <a href="/ProfileUser" class="btn btn-primary" style="position:absolute; left:46%; color:white">Back to Profile</a>
        
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