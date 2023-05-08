<template>
  <v-card color="#2161D5" width="1140" class="mx-auto">
   <div class="text-subscribe d-flex mt-5 ml-5 pa-8">
     <h1>Subscribe Now for
       <br>Get Special Features!
     <br>
     <p class="text-white">Let's subscribe with us and find the fun.</p>
     </h1>
     <div class="ml-auto mt-10 mr-5">
       <v-btn class="btn-subscribe px-10 " ro x-large>Subscribe</v-btn>
     </div>
   </div>
  </v-card>
</template>
<script>
export default {
  name:'Subscribe'
}
</script>
<style scoped>
h1{
  color: #fff !important;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 35px;
}
p{
  font-family: 'Rubik', sans-serif;
  font-weight: 400 !important;
  color: #fff !important;
}
.btn-subscribe{
  color: #2161D5 !important;
  background-color: #fff !important;
}
.btn-subscribe::after{
  content: "";
  position: absolute;
  right: 0;
  left: 20px;
  top: 20px;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  filter: blur(27px);
  border-radius: 100px;
}
</style>
