<template>
  <v-app>
    <v-container class="mx-0 my-0 px-0 py-0">
      <v-row>
        <v-col cols="4" class="pb-0">
          <v-card class="card-content-login" height="655" >
            <div class="logo d-flex align-center ml-5 pb-15">
              <div class="logo-icon ml-3 mt-5">
                <v-img src="@/assets/images/Logo.png" width="38"></v-img>
              </div>
              <div class="logo-text ml-2 mt-5">
                <v-img  src="@/assets/images/Logo-Text.png"></v-img>
              </div>
            </div>
          <div class="hero-img-content mt-10">
            <v-img  src="@/assets/images/img-content.png"></v-img>
          </div>
            <div class="text-services text-center">
              <h1>Services</h1>
              <h2>An expert team help you to analyze your polticalt
                <br>power.An expert team .</h2>
            </div>
            <div class="text-copyright ml-2 mt-14">
              <p>©2020 All Rights Reserved. PT Indonesia Indicator</p>
            </div>
          </v-card>
        </v-col>
        <v-col cols="8" class="text-center my-auto">
          <div class="main-content">
            <div class="header mt-15 d-flex justify-start">
              <h1 class="text-get-started">Welcome To Logo ipsum</h1>
            </div>
            <div class="text-little mr-15 d-flex justify-start">
              <p>Don't have account? <span >Sign Up</span></p>
            </div>
            <div class="content-login pt-5 w-50 d-flex flex-column align-items-start">
              <v-text-field
                  label="Username"
                  hide-details="true"
                  type="text"
                  outlined
                  v-model="username"
                  class="white-background mb-5 mx-auto"
              ></v-text-field>
              <v-text-field
                  outlined
                  class="mx-auto"
                  :append-icon="passwordType ? 'mdi-eye-off' : 'mdi-eye'"
                  :type="passwordType ? 'password' : 'text'"
                  @click:append="togglePassword"
                  v-model="password"
                  hide-details="true"
                  label="Password"
              ></v-text-field>
              <div class="d-flex check-box justify-start">
                <v-checkbox
                    label="Remember Me"
                ></v-checkbox>
              </div>
              <v-btn large @click="handleSubmit" color="#2161D5" class="btn-login mt-5 pa-5 mx-auto">Login</v-btn>
            </div>

          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";
import Navbar from '@/components/Navbar'

export default {
  components: {Navbar},

  data(){
    return{
      username:'',
      password:'',
      passwordType: true,
    }
  },
  methods:{
    togglePassword() {
      this.passwordType = !this.passwordType;
    },
    async handleSubmit(){
      const response = await axios
          .post("https://dummyjson.com/auth/login", {
            username: this.username,
            password: this.password,
          })
          .then((res) => {
            if ((res.data.status = "success")) {
              const token = res.data.token;
              sessionStorage.setItem("token", true);
              this.$router.push("/dashboard");
            }
          })
          .catch((err) => {
            this.$swal.fire({
              icon: "error",
              title: "Oops...",
              text: "looks like the username or password you entered is wrong!",
            });
          });
      setTimeout(()=>{
        this.isLoading = false
      },2000)
    }
  }
};
</script>

<style scoped>

.v-text-field{
  width: 50%;
  background-color: #fff !important;
}
.header{
  margin-left: 30vh;
}
.text-little{
  margin-left: 30vh;
}
.check-box{
  margin-left: 30vh;
}
span{
  color: #2161D5;
  font-weight: 600;
  font-family: 'Rubik', sans-serif;

}
</style>
