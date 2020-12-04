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

    <div class="container" style="width: 60%">

        <div>
            <img :src="'http://127.0.0.1:8000/image/' + image" 
                class="mx-auto d-block rounded-circle" 
                alt="Cinque Terre" 
                style="margin-top: 1rem;"
                width="150px"
                height="150px">
        </div>

        <div style="margin: 1rem" align="center">
            <a class="btn btn-primary" style="color:white;" href="/ChangePicture">Change Photo</a>
        </div>

        <form action="">
            <div class="form-group row">
                <label for="inputNama" class="col-sm-3 col-form-label">Nama</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" v-model="nama" readonly>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputTgl" class="col-sm-3 col-form-label">Tanggal Lahir</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" v-model="tanggal_lahir" readonly>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputJK" class="col-sm-3 col-form-label">Jenis Kelamin</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" v-model="jenis_kelamin" readonly>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputEmail" class="col-sm-3 col-form-label">Email</label>
                <div class="col-sm-9">
                    <input type="email" class="form-control" v-model="email" readonly>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputTelp" class="col-sm-3 col-form-label">No. Telp</label>
                <div class="col-sm-9">
                    <input type="number" class="form-control" v-model="noTelp" readonly>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputProv" class="col-sm-3 col-form-label">Provinsi</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" v-model="provinsi" readonly>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputAlamat" class="col-sm-3 col-form-label">Alamat</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" v-model="alamat" readonly>
                </div>
            </div>

            <div style="margin: 1rem 0rem;" align="center">
                <a href="/ProfileUpdate" class="btn btn-primary" style="color:white;">Change Profile</a>
            </div>
            
        </form>
    </div>  
    </div>
</template>

<script>
export default {
    name: "ProfileUser",
    data() {
        return {
            nama: '',
            tanggal_lahir: '',
            jenis_kelamin: '',
            email: '',
            noTelp: '',
            provinsi: '',
            alamat: '',
            image: '',
            userID: '',
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
                    this.nama = response.data.name;
                    this.tanggal_lahir = response.data.tanggal_lahir;
                    this.jenis_kelamin = response.data.jenis_kelamin;
                    this.email = response.data.email;
                    this.noTelp = response.data.no_telp;
                    this.provinsi = response.data.provinsi;
                    this.alamat = response.data.alamat;
                    this.image = response.data.image;
                })
        },
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