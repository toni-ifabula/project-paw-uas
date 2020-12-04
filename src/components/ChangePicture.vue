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

        <div style="margin: 2rem 23rem;">

            <img :src="'http://127.0.0.1:8000/image/' + image" 
                class="mx-auto d-block rounded-circle" 
                alt="Cinque Terre" 
                style="margin-top: 1rem;"
                width="150px"
                height="150px">
            
            <br><br>

            <form @submit.prevent="upload">
                <input style="margin-left: 5rem;" @change="handleOnChange" type="file">
                <br><br>
                <button class="btn btn-primary mx-auto d-block" style="color:white" @click="upload()">Upload</button>
            </form>

            <br><br>
            
            <a href="/ProfileUser" class="btn mx-auto d-block" style="color:white; background-color: green">Back to Profile</a>

        </div>
        
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
            image: '',
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
                    this.image = response.data.image;
                })
        },

        handleOnChange(e) {
            this.image = e.target.files[0];
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