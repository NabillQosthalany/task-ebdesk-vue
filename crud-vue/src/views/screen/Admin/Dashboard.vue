<template>
  <v-app>
    <SideBar/>
    <div class="content">
      <v-app-bar
          app
          color="#F5F6FA"
          dark>
        <v-app-bar-nav-icon class="nav-icon-color" dark @click.stop="mini = !mini"/>
        <v-spacer/>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="black" v-bind="attrs" v-on="on" text>
              <v-icon>mdi-weather-night</v-icon>
              <v-img src="@/assets/images/hero-img.png" width="30"/>
              Hello User
              <v-icon>mdi-arrow-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="Logout">
              <v-btn color="transparent" elevation="0"><v-icon>mdi-account</v-icon>Profile</v-btn>
            </v-list-item>
            <v-list-item @click="handleLogout">
              <v-btn color="transparent" elevation="0"><v-icon>mdi-logout</v-icon>Logout</v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
      <div class="icon-content d-flex flex-row mt-10 ml-10">
        <v-icon>mdi-home</v-icon>
        <v-icon class="mr-2">mdi-arrow-right</v-icon>
        <p class="statistic mt-4 mr-2">Statistic</p>
        <v-icon class="mr-2">mdi-arrow-right</v-icon>
        <p class="mt-4 mr-2">Wilayah</p>
      </div>
      <v-row>
        <v-col cols="12" sm="6">
          <v-card style="height:50vh">
            <LineChart/>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card style="height:50vh">
            <v-subheader>Activities</v-subheader>
            <Bar/>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="mt-15">
        <v-col cols="12" sm="4">
          <v-card style="height:50vh">
            <v-subheader>Activities</v-subheader>

            <DoughnutChart/>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card style="height:50vh">
            <v-subheader>Activities</v-subheader>
            <Spider/>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card style="height:50vh">
            <v-subheader>Activities</v-subheader>
            <DoughnutChart3/>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="mt-15 pt-15">
        <v-col cols="12" sm="4">
          <v-card style="height:50vh">
            <v-subheader>Activities</v-subheader>
            <DoughnutChart2/>
          </v-card>
        </v-col>
        <v-col cols="12" sm="8">
          <v-card style="height:50vh">
            <v-subheader>Activities</v-subheader>
            <BarDua/>
          </v-card>
        </v-col>
      </v-row>
    </div>

  </v-app>
</template>
<script>
import SideBar from "@/components/SideBar";
import LineChart from "@/components/charts/Line";
import Bar from "@/components/charts/Bar"
import DoughnutChart from "@/components/charts/Dougnut";
import DoughnutChart3 from "@/components/charts/Dougnut3";
import DoughnutChart2 from "@/components/charts/Dougnut2";

import Spider from "@/components/charts/Spider";
import BarDua from "@/components/charts/BarDua";
export default {
  components: {BarDua, Spider, DoughnutChart,DoughnutChart2,DoughnutChart3, LineChart, SideBar,Bar},
  data:()=>({

  }),
  methods:{
    handleLogout(){
      sessionStorage.removeItem('token');
      this.$router.push('/')
    },
  }
}
</script>
<style scoped>
.content{
  height: 220vh;
  background-color: #F5F6FA !important;
}
.nav-icon-color {
  color: black !important;
}
p{
  font-family: 'Rubik', sans-serif;
  font-size: 13px;
  font-weight: 300;
  color: #8697A8;
}
.statistic{
  font-family: 'Rubik', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: black !important;
}

</style>
