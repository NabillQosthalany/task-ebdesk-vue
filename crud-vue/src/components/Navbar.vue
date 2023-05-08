<template>
  <v-app>
    <v-app-bar
    class="navbar">
      <div class="logo d-flex align-center ml-5 pb-5">
        <div class="logo-icon ml-3 mt-5">
          <v-img src="@/assets/images/Logo.png" width="38"></v-img>
        </div>
        <div class="logo-text ml-2 mt-5">
          <v-img  src="@/assets/images/Logo-Text.png"></v-img>
        </div>
      </div>
      <v-list color="transparent" class="mx-auto">
        <v-item-group>
          <router-link to="/home" class="nav-link" exact-active-class="active-navlink">Home</router-link>
          <router-link to="/*" class="nav-link" exact-active-class="active-navlink">Product</router-link>
          <router-link to="/*" class="nav-link" exact-active-class="active-navlink">Blog</router-link>
          <router-link to="/*" class="nav-link" exact-active-class="active-navlink">Pricing</router-link>
          <router-link to="/*" class="nav-link" exact-active-class="active-navlink">Contact</router-link>
          <router-link to="/About" class="nav-link" exact-active-class="active-navlink">About Us</router-link>
        </v-item-group>
      </v-list>
      <v-btn color="transparent" class="btn-login mr-5">
        <router-link to="/" >Sign In</router-link>
      </v-btn>
      <v-btn
          class="btn-signUp ma-2"
          outlined
          rounded
      >
        Sign Up
      </v-btn>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
a{
  text-decoration: none;
  color: #0B132A !important;
  border: none;
}
.active-navlink{
  color: #0B132A;
  font-weight: 600;
}
.btn-login{
  Line-height: 19px;
  width: 10px;
  font-family: 'Rubik', sans-serif;
  font-weight: 600;
  box-shadow: none;
  color: #0B132A !important;
}
.v-toolbar__content{
  background-color: transparent;

}
</style>
