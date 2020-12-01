<template>
    <div id="app">
        <nav class="navbar navbar-custom navbar-expand-sm">
            <img src="@/assets/logo.png" width="50" height="50" alt="" />
            <p class="navbar-brand-custom" style="margin: 0rem 1rem">
                Yuk Titip
            </p>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a
                        class="nav-link"
                        style="color: white; margin: 0.5rem"
                        href="#"
                    >
                        Home
                    </a>
                </li>
                <li class="nav-item">
                    <a
                        class="nav-link"
                        style="color: white; margin: 0.5rem"
                        href="/ContactUs"
                    >
                        Contact Us
                    </a>
                </li>
                <li class="nav-item">
                    <a
                        class="nav-link"
                        style="color: white; margin: 0.5rem"
                        href="/AboutUs"
                    >
                        About Us
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/ProfileUser">
                        <i
                            class="fa fa-user fa-2x"
                            aria-hidden="true"
                            style="color: white; margin: 0rem 1rem"
                        ></i>
                    </a>
                </li>
            </ul>
        </nav>

        <div class="container" style="width: 60%">
            <h1 style="margin: 1rem 0rem; font-weight: bold">Contact Us</h1>

            <form action="">
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputFirstName">Nama Depan</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="namaDepan"
                            placeholder="Nama Depan"
                            required
                        />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputLastName">Nama Belakang</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="namaBelakang"
                            placeholder="Nama Belakang"
                            required
                        />
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputOrg">Email</label>
                    <input
                        type="email"
                        class="form-control"
                        v-model="email"
                        placeholder="Email"
                        required
                    />
                </div>
                <div class="form-group">
                    <label for="inputPhone">Nomor Telepon</label>
                    <input
                        type="number"
                        class="form-control"
                        v-model="noTelp"
                        placeholder="08xxxxxxxxxx"
                        required
                    />
                </div>
                <div class="form-group">
                    <label for="txtMessage">Message</label>
                    <textarea
                        class="form-control"
                        v-model="message"
                        rows="10"
                        placeholder="Message"
                        required
                    ></textarea>
                </div>
                
            </form>
            <button @click="submitMessage()" class="btn">Submit</button>
        </div>

        <div class="footer">
            <div class="row">
                <div class="col-sm-3" style="margin-top: 3rem">
                    <img
                        src="@/assets/footerLogo.png"
                        style="margin-left: 5.5rem"
                    />
                </div>
                <div class="col-sm-3" style="margin-top: 2rem">
                    <h4 style="font-weight: bold; color: white">
                        Explore More
                    </h4>
                    <br />
                    <a style="color: white" href="#">Home</a>
                    <br /><br />
                    <a style="color: white" href="/ContactUs">Contact Us</a>
                    <br /><br />
                    <a style="color: white" href="/AboutUs">About Us</a>
                </div>
                <div class="col-sm-3" style="margin-top: 2rem">
                    <h4 style="font-weight: bold; color: white">Contact</h4>
                    <br />
                    <p style="color: white">YukTitip@uajy.ac.id</p>
                    <p style="color: white">(+62)81123456789</p>
                </div>
                <div class="col-sm-3" style="margin-top: 2rem">
                    <h4 style="font-weight: bold; color: white">Visit Us</h4>

                    <div id="map"></div>
                </div>
            </div>
        </div>

        <v-snackbar v-model="snackbar" :color="color" timeout="2000" bottom>
            {{ error_message }}
        </v-snackbar>
    </div>
</template>

<script>
import mapboxgl from "mapbox-gl";

export default {
    name: "ContactUs",
    data() {
        return {
            accessToken:
                "pk.eyJ1IjoidG9uaTYxMiIsImEiOiJja2ZremZpZjIxMHI4MnBtanJydWo5MDlkIn0.zbCKkpFCaRWr-WJ3Tboc5g",
            namaDepan: "",
            namaBelakang: "",
            email: "",
            noTelp: "",
            message: "",
            load: false,
            snackbar: false,
            error_message: "",
            color: "",
            valid: false,
        };
    },

    methods: {
        submitMessage() {
                this.load = true;
                this.$http
                    .post(this.$api + "/pesan", {
                        namadepan: this.namaDepan,
                        namabelakang: this.namaBelakang,
                        email: this.email,
                        notelp: this.noTelp,
                        pesan: this.message,
                    })
                    .then((response) => {
                        this.error_message = response.data.message;
                        this.color = "green";
                        this.snackbar = true;
                        this.load = false;
                        this.clear();
                    })
                    .catch((error) => {
                        this.error_message = error.response.data.message;
                        this.color = "red";
                        this.snackbar = true;
                        this.load = false;
                    });
        },
    },

    mounted() {
        mapboxgl.accessToken = this.accessToken;

        var map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/streets-v11",
            center: [110.415981, -7.779415],
            zoom: 14,
        });

        new mapboxgl.Marker().setLngLat([110.415981, -7.779415]).addTo(map);
    },
};
</script>

<style>
@import "../assets/styleToni.css";
@import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
@import url("https://fonts.googleapis.com/css?family=Sriracha");
@import url("https://fonts.googleapis.com/css?family=Roboto");
</style>