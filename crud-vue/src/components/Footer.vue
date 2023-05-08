<template>
  <v-footer
      color="#F8F8F8"
      padless
  >
  <v-card color="#F8F8F8" class="d-flex" flat>
       <div class="content-logo-footer">
         <div class="logo-footer d-flex flex-row mt-10 ml-15 ">
           <v-img class="logo-geolabs" src="@/assets/images/Geolabs.png"/>
           <h1 class="mt-2">Geolabs</h1>
         </div>
         <div>
           <p class="mt-10 ml-10">Geolabs is a private virtual network that has
             <br>unique features and has high security.</p>
         </div>
         <v-card-text>
           <v-btn
               v-for="icon in icons"
               :key="icon"
               color="blue"
               class="mt-3 ml-10 white--text"
               icon
           >
             <v-icon size="24px">
               {{ icon }}
             </v-icon>
           </v-btn>
           <p class="ml-10 mt-4">©2020EBDESK</p>
         </v-card-text>
       </div>
    <div class="text-litte-footer mt-10">
      <h2>Product</h2>
      <div class="content-footer">
        <p v-for="item in products" :key="item.id" class="mt-2">{{ item.name }}</p>
      </div>
      <div class="text-litte-footer-2 mt-10">
        <h2>Engage</h2>
        <div class="content-footer">
          <p v-for="engage in Engages" :key="engage.id" class="mt-2">{{ engage.name }}</p>
        </div>
      </div>
      <div class="text-litte-footer-3 mt-10">
        <h2>Earn Money</h2>
        <div class="content-footer">
          <p v-for="money in Money" :key="money.id" class="mt-2">{{ money.name }}</p>
        </div>
      </div>

    </div>
  </v-card>
  </v-footer>
</template>
<script>
export default {
  name:'Footer',
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-instagram',
    ],
    products: [
      { id: 1, name: 'Download' },
      { id: 2, name: 'Pricing' },
      { id: 3, name: 'Locations' },
      { id: 4, name: 'Server' },
      { id: 5, name: 'Countries' },
      { id: 6, name: 'Blog' },
    ],
    Engages: [
      { id: 1, name: 'Geolabs?' },
      { id: 2, name: 'FAQ' },
      { id: 3, name: 'Tutorials' },
      { id: 4, name: 'About Us' },
      { id: 5, name: 'Privacy Policy' },
      { id: 6, name: 'Terms Of Servic' },
    ],
    Money:[
      { id: 1, name: 'Affiliate' },
      { id: 2, name: 'Become Partner' },
    ]
  }),
}
</script>
<style scoped>
.logo-footer{
  width: 150px ;
}
.text-litte-footer{
  position: absolute;
  right: -60vh;
}
.text-litte-footer-2{
  position: absolute;
  right: -40vh;
  bottom: 1vh;
}
.text-litte-footer-3{
  position: absolute;
  right: -80vh;
  bottom: 21vh;
}
</style>
