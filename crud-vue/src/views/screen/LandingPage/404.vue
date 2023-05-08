<template>
  <v-app>
    <Navbar/>
    <div class="content-404">
    <v-container>
      <v-row justify="center">
        <v-col cols="6" class="my-auto">
          <div class="typography">
            <h1>OOPS!
              <br>Page Not Found</h1>
            <p>This page doesn`t exist or was removed </p>
            <p>We suggest you back to home</p>
            <v-btn rounded color="#2161D5" class="btn-signUp">Lear More</v-btn>
          </div>
        </v-col>
        <v-col cols="6" class="mt-15" >
          <v-img src="@/assets/images/404.png" width="400"/>
        </v-col>
      </v-row>
    </v-container>

    </div>
  </v-app>
</template>
<script>
import Navbar from "@/components/Navbar";
export default {
  components: {Navbar}
}
</script>
<style scoped>
.btn-signUp{
  color: #fff !important;
}
.typography{
  margin-top: 25vh;
}
</style>
