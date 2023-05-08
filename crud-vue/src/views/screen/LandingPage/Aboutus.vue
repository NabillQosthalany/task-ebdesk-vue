<template>
  <v-app>
   <section class="about-us-section">
     <Navbar/>
     <div class="content-about-us">
       <div class="img">
         <v-img src="@/assets/images/ellipse.png" class="background-image" width="800"/>
         <div class="about-us text-center ">
           <h1 class="mt-5">About Us</h1>
           <p>A small company offering data-driven solutions for campaign effectiveness
             <br>using spatial data and detailed analysis of target audience (voters). Use
             <br>technology that unites spatial data science and political science.</p>
           <v-btn color="#fff" class="btn-contact" rounded>Contact Us</v-btn>
         </div>
       </div>
     </div>
   </section>
    <section>
      <div class="text-quote text-center mt-10">
        <v-img class="mx-auto" src="@/assets/images/quote.png" width="50"/>
        <h2>In just small steps you’ll connected directly to our technology.
          <br/>
          Knowledge about your own-power, your rivals,
          <br/>
          your voters, and your region in Election.</h2>
      </div>
      <div class="card-content mt-10">
        <h1 class="text-center">Our Advisors</h1>
        <v-container>
          <v-row>
            <v-col cols="4" class="mx-auto mr-0">
                <v-img src="@/assets/images/Placeholder.png"/>
             <div class="name-user text-center">
               <h3 class="mb-3">Xavier Oswald</h3>
               <h2>co-founder, developer</h2>
             </div>
            </v-col>
            <v-col cols="4" class="mx-auto mr-0">
              <v-img src="@/assets/images/Placeholder (1).png"/>
              <div class="name-user text-center">
                <h3 class="mb-3">Sara Creighton</h3>
                <h2>co-founder, developer</h2>
              </div>
            </v-col>
            <v-col cols="4" class="mx-auto mr-0">
              <v-img src="@/assets/images/Placeholder (2).png"/>
              <div class="name-user text-center">
                <h3 class="mb-3">Brandon Ogden</h3>
                <h2>Project manager</h2>
              </div>
            </v-col>
          </v-row>
          <div class="politic-text text-center mt-10">
            <h3 class="text-politic">What Political Figure Say</h3>
            <p class="text-politic-little">These are the stories of political figure who have joined us with great
              <br>pleasure when using this crazy feature.</p>
          </div>
          <v-row>
            <v-col cols="4">
              <v-card
                  class="border-active mx-auto"
                  max-width="400"
                  height="200"
                  outlined
              >
                <div class="text-name ml-5 mt-5 d-flex flex-row">
                  <div class="img-hero">
                    <v-img cl src="@/assets/images/Airlangga.png" />
                  </div>
                  <div class="text-name">
                    <h2>Airlangga</h2>
                    <span>Menteri Koordinator dan Perekonomian RI</span>
                  </div>
                </div>
                <v-list-item-subtitle class="ml-5 mt-5">
                  Saya minta kepada segenap pengurus DPD
                  <br>provinsi, kabupten dan kota, untuk kita harus
                  <br> memiliki roadmap 2024. Di tahun melakukan
                  <br> penggalangan opini masyarakat
                </v-list-item-subtitle>
              </v-card>
            </v-col>
            <v-col cols="4">
              <v-card
                  class=" mx-auto"
                  max-width="400"
                  height="200"
                  outlined
              >
                <div class="text-name ml-5 mt-5 d-flex flex-row">
                  <div class="img-hero">
                    <v-img cl src="@/assets/images/Jokowi.png" />
                  </div>
                  <div class="text-name">
                    <h2>Jokowi Dodo</h2>
                    <span>Presiden RI</span>
                  </div>
                </div>
                <v-list-item-subtitle class="ml-5 mt-5">
                  Daerah merupakan bagian dari pemerintah
                  <br>yang langsung berinteraksi dengan
                </v-list-item-subtitle>
              </v-card>
            </v-col>
            <v-col cols="4">
              <v-card
                  class=" mx-auto"
                  max-width="400"
                  height="200"
                  outlined
              >
                <div class="text-name ml-5 mt-5 d-flex flex-row">
                  <div class="img-hero">
                    <v-img cl src="@/assets/images/Puan.png" />
                  </div>
                  <div class="text-name">
                    <h2 class="name">Puan Maharini</h2>
                    <span>Ketua DPR dan Fraksi PDI Perjuangan</span>
                  </div>
                </div>
                <v-list-item-subtitle class="ml-5 mt-5">
                  Daerah merupakan bagian dari pemerintah
                  <br>yang langsung berinteraksi dengan
                  <br>masyarakat ketikaproses demokratisasi
                  <br>berlangsung.
                </v-list-item-subtitle>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>
    <section>
      <div class="subscribe-content mt-10">
        <Subscribe/>
      </div>
      <div class="footer mt-10">
        <Footer/>
      </div>
    </section>
  </v-app>
</template>
<script>
import Navbar from "@/components/Navbar";
import Subscribe from "@/components/Subscribe"
import Footer from "@/components/Footer"

export default {
  components: {Navbar,Subscribe,Footer}
}
</script>
<style scoped>
.about-us-section{
  height: 100vh;
  background-color: #2161D5 !important;
}
h1{
  color: #fff !important;
  font-family: 'Rubik', sans-serif;
  font-size: 60px;
  font-weight: 600 !important;
}
p{
  color: #fff !important;
  font-family: 'Rubik', sans-serif;
  font-size: 14px;
  font-weight:400 !important;
}
.about-us{
  margin-top: 20vh;
}
.img {
  position: relative;
}
.background-image {
  position: absolute;
  top: -20vh;
  left: 50vh;
}
.text-politic{
  color: #0B132A !important;
  font-size: 25px;
}
.text-politic-little{
  font-size: 15px;
  color: #4F5665 !important;
}
.text-name{
  width: 400px;
}
.text-politycan{
  width: 200px;
}
.name{
  width: 200px;
}
span{
  color:#4F5665 !important;
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  font-size: 14px;
  width: 150px ;
}
.border-active{
  border: 2px solid blue;
}
</style>
