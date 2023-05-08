<template>
  <v-app>
    <Navbar/>
    <v-container class="mb-15">
      <v-row>
        <v-col cols="6">
        <div class="header mx-0 mt-10">
          <h1>Observe Your
            <br><span>Power</span>
          </h1>
        </div>
          <div class="text-little ma-0">
            <p>Trafalgar provides progressive, and affordable healthcare, accessible on
              <br>
              mobile and online for everyone</p>
          </div>
          <v-btn large class="btn-demo" rounded color="#2161D5">
            See A Demo
          </v-btn>
        </v-col>
        <v-col cols="6">
          <div class="img-header">
            <v-img src="@/assets/images/undraw_voting_nvu7 1.svg"/>
          </div>
        </v-col>
      </v-row>
      <section class="section-1">
        <div class="main-text text-center">
          <h2>Why Choose us?</h2>
          <p class="mt-5">We provide to you the best choiches for you. The leading
            <br>
            political campaign intelligence platform</p>
        </div>
        <div class="card-content">
          <v-row>
            <v-col cols="4">
              <v-card
                  class="v-card-item mx-auto"
                  max-width="330"
                  min-height="300"
                  outlined
                  @click="toggleActiveCard"
                  :class="{ active: card1 }"

              >
                <v-img class="mt-10 ml-3" src="@/assets/images/DataVector.png" width="62"/>
                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item-title class="text-h5 mb-1">
                      Data
                    </v-list-item-title>
                    <v-list-item-subtitle class="mt-5">
                      The biggest regional data
                      <br>development, and POI data.</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-col>
            <v-col cols="4">
              <v-card
                  class="v-card-item mx-auto"
                  max-width="330"
                  min-height="300"
                  outlined
                  @click="toggleActiveCard2"
                  :class="{ active: card2 }"
              >
                <v-img class="mt-10 ml-3" src="@/assets/images/ion_hardware-chip.svg" width="62"/>
                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item-title class="text-h5 mb-1">
                      Technology
                    </v-list-item-title>
                    <v-list-item-subtitle class="mt-5">
                      Geospatial platform with advanced
                      <br>
                      analysis that suit your neetds.</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-col>
            <v-col cols="4">
              <v-card
                  class="v-card-item mx-auto"
                  max-width="330"
                  min-height="300"
                  outlined
                  @click="toggleActiveCard3"
                  :class="{ active: card3 }"
              >
                <v-img class="mt-10 ml-3" src="@/assets/images/services.png" width="62"/>
                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item-title class="text-h5 mb-1">
                      Services
                    </v-list-item-title>
                    <v-list-item-subtitle class="mt-5">
                      An expert team help you to analyze
                      <br>
                      your poltical power.
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-col>
          </v-row>
        </div>
        <div class="btn-learn-more mx-auto d-flex justify-center">
          <v-btn
              outlined
              rounded
              class="btn-signUp mt-5">Learn More</v-btn>
        </div>
      </section>
    </v-container>
    <section class="overview-section mb-15">
      <div class="content-overview">
        <div class="app-overview-1">
            <v-row>
              <v-col cols="5" class="ml-5">
                <div class="overview-img">
                  <v-img src="@/assets/images/particel.svg" class="img-layer1 mt-10" width="441"/>
                  <v-img src="@/assets/images/Card-img.png" class="img-layer2 mt-auto" width="345" height="440"/>
                  <div class="logo">
                    <v-img src="@/assets/images/element.png" class="img-layer3 ml-auto" width="131"/>
                  </div>
                </div>
              </v-col>
              <v-col cols="4" class="mr-10">
                <div class="text-overview">
                  <h2 class="overview">App Overview 1</h2>
                  <p class="overview-little">Advanced spatial analysis to understand where and why
                    <br>things happen, identify the target constituency, and optimize
                    <br>the campaign.</p>
                  <v-btn outlined rounded class="btn-learn-more">Learn More</v-btn>
                </div>
              </v-col>
            </v-row>
        </div>
      </div>
      <div class="content-overview">
        <div class="app-overview-1">
          <v-container>
            <v-row>
              <v-col cols="6">
                <div class="text-overview">
                  <h2 class="overview">App Overview 2</h2>
                  <p class="overview-little">Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    <br>do amet sint. Velit officia consequat duis enim velit mollit.
                    <br>Exercitation veniam consequat sunt nostrud amet.</p>
                  <v-btn outlined rounded class="btn-learn-more">Learn More</v-btn>
                </div>
              </v-col>
              <v-col cols="6" class="pt-0" >
                <div class="overview-img">
                  <v-img src="@/assets/images/partikel-2.svg" class="img-layer-ov-1" width="473"/>
                  <v-img src="@/assets/images/overview-img-2.png" class="img-layer-ov-2" width="497" height="440"/>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>
      <div class="content-overview">
        <div class="app-overview-1">
          <v-row>
            <v-col cols="5" class="ml-5">
              <div class="overview-img">
                <v-img src="@/assets/images/particel.svg" class="img-layer-ov-3 mt-10" width="441"/>
                <v-img src="@/assets/images/overview-img-3.png" class="img-layer-ov-4 mt-auto"/>
                <
              </div>
            </v-col>
            <v-col cols="4" class="mr-10">
              <div class="text-overview">
                <h2 class="overview">App Overview 3</h2>
                <p class="overview-little">Advanced spatial analysis to understand where and why
                  <br>things happen, identify the target constituency, and optimize
                  <br>the campaign.
                 </p>
                <v-btn outlined rounded class="btn-learn-more">Learn More</v-btn>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </section>
    <div class="main-text text-center">
      <h2>How it works for you?</h2>
      <p class="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed
        <br>do eiusmod tempor incididunt ut labore et dolore magna
        <br>aliqua. Ut enim ad minim veniam.</p>
      <v-btn large class="btn-demo mb-10" rounded color="#2161D5">
        See A Demo
      </v-btn>
    </div>
    <div class="card-demo">
    <v-row justify="center">
      <v-col cols="6">
        <v-card
            class="mx-auto mr-0"
            max-width="400"
            max-height="550"
            outlined
        >
          <v-img class="mt-10 mx-auto" src="@/assets/images/rafiki.png" width="300"/>
          <v-list-item three-line>
            <v-list-item-content class="text-center text-left">
              <v-list-item-title class="text-h5 mb-1 ">
                <h3 class="text-card">Geographic Segmetaion</h3>
              </v-list-item-title>
             <div class="card-title mt-5">
               <p>Consist of creating differend groups of
                 <br>
                 customers based on geographic
                 <br>
                 boundaries</p>
             </div>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="6" >
        <v-card
            class="mx-auto ml-0"
            max-width="400"
            max-height="550"
            outlined
        >
          <v-img class="mt-10 mx-auto" src="@/assets/images/rafiki-1.svg" width="300"/>
          <v-list-item three-line>
            <v-list-item-content class="text-center text-left">
              <v-list-item-title class="text-h5 mb-1 ">
                <h3 class="text-card">Demographic Segmetaion</h3>
              </v-list-item-title>
              <div class="card-title mt-5">
                <p>Consist of dividing the market through different
                  <br>variables such as age, gender, income, etc</p>
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card
            class="mx-auto mr-0"
            max-width="400"
            max-height="550"

            outlined
        >
          <v-img class="mt-10 mx-auto" src="@/assets/images/rafiki-2.svg" width="300"/>
          <v-list-item three-line>
            <v-list-item-content class="text-center text-left">
              <v-list-item-title class="text-h5 mb-1 ">
                <h3 class="text-card">Pyschographic Segmetaion</h3>
              </v-list-item-title>
              <div class="card-title mt-5">
                <p>Consist of creating differend groups of
                  <br>
                  customers based on geographic
                  <br>
                  boundaries</p>
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card
            class="mx-auto ml-0"
            max-width="400"
            max-height="550"
            outlined
        >
          <v-img class="mt-10 mx-auto" src="@/assets/images/rafiki-3.svg" width="300"/>
          <v-list-item three-line>
            <v-list-item-content class="text-center text-left">
              <v-list-item-title class="text-h5 mb-1 ">
                <h3 class="text-card">Behavorial Segmetaion</h3>
              </v-list-item-title>
              <div class="card-title mt-5">
                <p>Consist of creating differend groups of
                  <br>
                  customers based on geographic
                  <br>
                  boundaries</p>
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    </div>
    <div class="main-text text-center">
      <h2>Plans and Pricing</h2>
      <p class="mt-5">We Provide to you best choices for you.The leading
        <br>political campaign intelligence platform</p>
    </div>
    <div class="card-pricing">
      <v-row>
        <v-col cols="6">
          <v-card @click="activateCard" :class="{ active: isActive1 }" max-width="330" min-height="" height="720" class="mx-auto mr-0">
            <div class="img-card">
              <v-img class="mx-auto" src="@/assets/images/Standard.png" width="144"/>
              <h2 class="text-center mt-5">Individual Plan</h2>
            </div>
           <div class="checklist-data">
             <div class="list-data-price ml-10">
               <div class="user d-flex flex-row">
                 <v-icon color="#2FAB73">mdi-check</v-icon>
                 <div class="data-price-list">
                   <p class="data-list mt-3 ml-2 mb-0">1 User</p>
                 </div>
               </div>
             </div>
             <div class="list-data-price ml-10 ">
               <div class="user d-flex flex-row">
                 <v-icon color="#2FAB73">mdi-check</v-icon>
                 <div class="data-price-list">
                   <p class="data-list mt-3 ml-2 mb-0">1 Basic Analysis</p>
                 </div>
               </div>
             </div>
             <div class="list-data-price ml-10 ">
               <div class="user d-flex flex-row">
                 <v-icon color="#2FAB73">mdi-check</v-icon>
                 <div class="data-price-list">
                   <p class="data-list mt-3 ml-2 mb-0">Unlimited Select Services</p>
                 </div>
               </div>
             </div>
           </div>
            <h2 class="card-price text-center">$99 <span class="price">/ mo</span></h2>
            <div class="btn-price d-flex justify-center mx-auto pb-10">
              <v-btn outlined rounded class="btn-signUp ">Select</v-btn>
            </div>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card @click="activateCard2" :class="{ active: isActive2 }" max-width="330" min-height="720"  class="mx-auto ml-0">
            <div class="img-card">
              <v-img class="mx-auto" src="@/assets/images/Standard.png" width="144"/>
              <h2 class="text-center mt-5">Parties Plan</h2>
            </div>
            <div class="checklist-data">
              <div class="list-data-price ml-10">
                <div class="user d-flex flex-row">
                  <v-icon color="#2FAB73">mdi-check</v-icon>
                  <div class="data-price-list">
                    <p class="data-list mt-3 ml-2 mb-0">Unlimited User</p>
                  </div>
                </div>
              </div>
              <div class="list-data-price ml-10 ">
                <div class="user d-flex flex-row">
                  <v-icon color="#2FAB73">mdi-check</v-icon>
                  <div class="data-price-list">
                    <p class="data-list mt-3 ml-2 mb-0">Basic Analysis</p>
                  </div>
                </div>
              </div>
              <div class="list-data-price ml-10 ">
                <div class="user d-flex flex-row">
                  <v-icon color="#2FAB73">mdi-check</v-icon>
                  <div class="data-price-list">
                    <p class="data-list mt-3 ml-2 mb-0">Unlimited Select Services</p>
                  </div>
                </div>
              </div>
              <div class="list-data-price ml-10 ">
                <div class="user d-flex flex-row">
                  <v-icon color="#2FAB73">mdi-check</v-icon>
                  <div class="data-price-list">
                    <p class="data-list mt-3 ml-2 mb-0">Free Extend 1 Month</p>
                  </div>
                </div>
              </div>

            </div>
            <h2 class="text-center mt-15">$500 <span class="price">/ mo</span></h2>
            <div class="btn-price d-flex justify-center mx-auto pb-10">
              <v-btn color="#2161D5" rounded class="btn-demo">Select</v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div class="question-content ">
      <h2 class="text-center">Frequenly Asked Questions</h2>
      <div class="card-question">
        <v-card class="mx-auto mt-5" width="754">
         <div class="questions-header d-flex flex-row ">
           <v-card-subtitle class="header-text-card">What do you mean by public-facing usage?</v-card-subtitle>
           <v-icon class="ml-auto mr-5">mdi-minus</v-icon>
         </div>
          <v-card-text>We define public-facing usage as leveraging CARTO to power enterprise-scale
            <br>applications that are made available to external parties such as clients or the public, as
            <br>opposed to internal demonstration-only applications.</v-card-text>
        </v-card>
        <v-card
            v-for="card in cards"
            :key="card.id"
            class="mx-auto mt-5"
            width="754">
          <div class="questions-header d-flex flex-row ">
            <v-card-subtitle >{{card.subtitle}}</v-card-subtitle>
            <v-icon class="ml-auto mr-5">mdi-plus</v-icon>
          </div>
        </v-card>
        <div class="btn-question d-flex justify-center mt-10">
          <v-btn rounded outlined class="btn-signUp mx-auto">Add Question</v-btn>
        </div>
      </div>
    </div>
    <div class="subscribe-content mt-10">
      <Subscribe/>
    </div>
    <div class="footer mt-10">
      <Footer/>
    </div>
  </v-app>
</template>
<script>
import Navbar from "@/components/Navbar";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";
export default {
  components:{
    Footer,
    Subscribe,
    Navbar
  },
  data() {
    return {
      isActive1: false,
      isActive2: false,
      card1:false,
      card2:false,
      card3:false,
      cards: [
        { id: 1, subtitle: 'Can i  buy more storage for my individual plan?'},
        { id: 2, subtitle: 'What happens to my data after the trial or if i cancel my subscription?'},
        { id: 3, subtitle: 'Can i cancel my monthly or annual subscription?'},
      ]
    };

  },
  methods: {
    activateCard() {
      this.isActive1 = !this.isActive1;
      this.isActive2 = false
    },
    activateCard2() {
      this.isActive2 = !this.isActive2;
      this.isActive1 = false
    },
    toggleActiveCard() {
      this.card1 = !this.card1;
      this.card2 = false
      this.card3 = false
    },
    toggleActiveCard2() {
      this.card2 = !this.card2;
      this.card1 = false
      this.card3 = false

    },
    toggleActiveCard3() {
      this.card3 = !this.card3;
      this.card1 = false
      this.card2 = false
    },
  }

}
</script>
<style scoped>
h1{
  font-family: 'Rubik', sans-serif;
  font-size: 60px;
  font-weight: 500;
}
.overview{
  color: #fff;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 35px;


}
.overview-little{
  color: #fff !important;
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  font-size: 15px;
}
h2{
  font-family: 'Rubik', sans-serif;
  font-size: 35px;
  font-weight: 700;
}
span{
  font-weight: 700;
}
p{
  font-family: 'Rubik', sans-serif;
  font-size: 16px;
  color: #4F5665 !important;
  font-weight: 400;
}
.card-price{
  margin-top: 18vh;
}
.v-card-item{
  border-radius: 20px;
}
.overview-section{
  background-color: #2161D5;
}
.text-overview{
  margin-top: 26vh;
}
.img-layer1 {
  z-index: 1;
}
.img-layer3{
   z-index: 1;
 }
.price{
  font-family: 'Rubik', sans-serif;
  color: #4F5665 !important;
}
.img-layer2 {
  position: absolute;
  z-index: 2;
  border-radius: 20px;
  top: 180vh;
  left: 25vh;
}
.logo{
  position: absolute;
  right: -10px;
  top: 195vh;

}
.section-1{
  margin-bottom: 67px;
}
.btn-learn-more{
  color: #fff !important;
  font-family: 'Rubik', sans-serif;
  font-weight: 300;
}
.img-layer-ov-1{
  z-index: 1;
}
.img-layer-ov-2{
  z-index: 2;
  position: absolute;
  border-radius: 20px;
  top: 295vh;
  right:35vh ;
}
.img-layer-ov-3{
  z-index: 1;
}
.img-layer-ov-4{
  z-index: 2;
  position: absolute;
  border-radius: 20px;
  top: 390vh;
  left:10vh ;
}
.user{
  width: 50px ;
  height: 50px;
}
.user v-img {
  vertical-align: middle;
}
.data-list{
  width: 200px;
}

</style>



