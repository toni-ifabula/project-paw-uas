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

            <p>imagePath : {{imagePath}}</p>
            <img src="imagePath" style="width: 100px; height: 100px">
            
            <br><br>

            <form @submit.prevent="upload">
                <input @change="handleOnChange" type="file">
                <br><br>
                <button class="btn btn-primary" style="color:white" @click="upload()">Upload</button>
            </form>
            
        </div>

        <a href="/ProfileUser" class="btn btn-danger" style="position:absolute; left:35%; color:black; background-color: red">Back to Profile</a>
        
    </div>

    <v-snackbar v-model="snackbar" :color="color" timeout="2000" bottom>
        {{error_message}}
        </v-snackbar>


    </div>
</template>

<script>
export default {
    data() {
        return {
            userID: '',
            imagePath: '',
            load: false,
            snackbar: false,
            error_message: '',
            color: '',
        }
    },

    methods: {
        readData() {
            var url = this.$api + '/user'
            this.$http.get(url, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .then(response => {
                    this.userID = response.data.id;
                    this.imagePath = response.data.image;
                })
        },

        handleOnChange(e) {
            this.image = e.target.files[0]
        },

        upload() {
            const formData = new FormData
            formData.set('image', this.image)
            this.$http.post(this.$api + "/updatePic/" + this.userID, formData, {
            headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
                }).then(response => {
                this.error_message = response.data.message;
                this.color = "green"
                this.snackbar = true;
                this.load = false;
                this.readData();
                }).catch(error => {
                this.error_message = error.response.data.message;
                this.color = "red"
                this.snackbar = true;
                this.load = false;
                this.readData();
            })
        }
    },

    mounted() {
        this.readData();
    }
}
</script>

<style>
  @import '../assets/styleToni.css';
  @import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
  @import url("https://fonts.googleapis.com/css?family=Sriracha");
  @import url("https://fonts.googleapis.com/css?family=Roboto");
</style>