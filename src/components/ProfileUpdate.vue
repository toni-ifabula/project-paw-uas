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
                <a class="nav-link" style="color: white; margin: 0.5rem" href="/ContactUs"> 
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

        <h1 style="text-align: center; margin: 3rem 0rem; font-weight: bold">UPDATE PROFILE</h1>

        <form action="">
            <div class="form-group row">
                <label for="inputNama" class="col-sm-3 col-form-label">Nama</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" v-model="nama">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputTgl" class="col-sm-3 col-form-label">Tanggal Lahir</label>
                <div class="col-sm-9">
                    <input type="date" class="form-control" v-model="tanggal_lahir">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputJK" class="col-sm-3 col-form-label">Jenis Kelamin</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" v-model="jenis_kelamin">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputEmail" class="col-sm-3 col-form-label">Email</label>
                <div class="col-sm-9">
                    <input v-model="email" class="form-control" readonly>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputTelp" class="col-sm-3 col-form-label">No. Telp</label>
                <div class="col-sm-9">
                    <input type="number" class="form-control" v-model="no_telp">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputProv" class="col-sm-3 col-form-label">Provinsi</label>
                <div class="col-sm-9">
                    <b-form-select v-model="provinsi" :options="options"></b-form-select>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputAlamat" class="col-sm-3 col-form-label">Alamat</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" v-model="alamat">
                </div>
            </div>
        </form>

        <div class="row" style="margin: 1rem 0rem;">
            <div class="col-sm-12 text-center">
                <button @click="submit()" class="btn btn-primary btn-md center-block" 
                    Style="width: 100px; margin: 0px 20px">
                    Submit
                </button>
                <a href="/ProfileUser" class="btn btn-danger btn-md center-block" 
                    Style="width: 100px; background-color: red; margin: 0px 20px; color: white;">
                    Back
                </a>
            </div>
        </div>
        
    </div>  

    <v-snackbar v-model="snackbar" :color="color" timeout="2000" bottom>
        {{ error_message }}
    </v-snackbar>

    </div>
</template>

<script>
export default {
    name: "ProfileUpdate",
    data() {
        return {
            userID: '',
            nama: '',
            tanggal_lahir: '',
            jenis_kelamin: '',
            email: '',
            no_telp: '',
            provinsi: '',
            alamat: '',
            snackbar: false,
            error_message: "",
            color: "",
            load: false,
            selected: '',
            options: [
                { value: 'Nanggroe Aceh Darussalam', text: 'Nanggroe Aceh Darussalam' },
                { value: 'Sumatera Utara', text: 'Sumatera Utara' },
                { value: 'Sumatera Barat', text: 'Sumatera Barat' },
                { value: 'Riau', text: 'Riau' },
                { value: 'Kepulauan Riau', text: 'Kepulauan Ria' },
                { value: 'Jambi', text: 'Jambi' },
                { value: 'Bengkulu', text: 'Bengkulu' },
                { value: 'Sumatera Selatan', text: 'Sumatera Selatan' },
                { value: 'Kepulauan Bangka Belitung', text: 'Kepulauan Bangka Belitung' },
                { value: 'Lampung', text: 'Lampung' },
                { value: 'Banten', text: 'Banten' },
                { value: 'DKI Jakarta', text: 'DKI Jakarta' },
                { value: 'Jawa Barat', text: 'Jawa Barat' },
                { value: 'Jawa Tengah', text: 'Jawa Tengah' },
                { value: 'Jawa Timur', text: 'Jawa Timur' },
                { value: 'DI Yogyakarta', text: 'DI Yogyakarta' },
                { value: 'Bali', text: 'Bali' },
                { value: 'Nusa Tenggara Barat', text: 'Nusa Tenggara Barat' },
                { value: 'Nusa Tenggara Timur', text: 'Nusa Tenggara Timur' },
                { value: 'Kalimantan Barat', text: 'Kalimantan Barat' },
                { value: 'Kalimantan Selatan', text: 'Kalimantan Selatan' },
                { value: 'Kalimantan Tengah', text: 'Kalimantan Tengah' },
                { value: 'Kalimantan Timur', text: 'Kalimantan Timur' },
                { value: 'Kalimantan Utara', text: 'Kalimantan Utara' },
                { value: 'Gorontalo', text: 'Gorontalo' },
                { value: 'Sulawesi Barat', text: 'Sulawesi Barat' },
                { value: 'Sulawesi Selatan', text: 'Sulawesi Selatan' },
                { value: 'Sulawesi Tenggara', text: 'Sulawesi Tenggara' },
                { value: 'Sulawesi Tengah', text: 'Sulawesi Tengah' },
                { value: 'Sulawesi Utara', text: 'Sulawesi Utara' },
                { value: 'Maluku', text: 'Maluku' },
                { value: 'Maluku Utara', text: 'Maluku Utara' },
                { value: 'Papua', text: 'Papua' },
                { value: 'Papua Barat', text: 'Papua Barat' },
            ]
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
                    this.nama = response.data.name;
                    this.tanggal_lahir = response.data.tanggal_lahir;
                    this.jenis_kelamin = response.data.jenis_kelamin;
                    this.email = response.data.email;
                    this.no_telp = response.data.no_telp;
                    this.provinsi = response.data.provinsi;
                    this.alamat = response.data.alamat;
                })
        },

        submit() {
            this.load = true;
                this.$http
                    .put(this.$api + "/update/" + this.userID, {
                        name: this.nama,
                        tanggal_lahir: this.tanggal_lahir,
                        jenis_kelamin: this.jenis_kelamin,
                        email: this.email,
                        provinsi: this.provinsi,
                        alamat: this.alamat,
                        no_telp: this.no_telp,
                    })
                    .then((response) => {
                        this.error_message = response.data.message;
                        this.color = "green";
                        this.snackbar = true;
                        this.load = false;
                        this.clear();
                        this.$router.push({
                            name: "ProfileUser",
                        });
                    })
                    .catch((error) => {
                        this.error_message = error.response.data.message;
                        this.color = "red";
                        this.snackbar = true;
                        this.load = false;
                    });
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