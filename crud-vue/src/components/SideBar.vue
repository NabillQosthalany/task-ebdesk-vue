<template>
  <v-navigation-drawer app dark color="#2A3042">
    <div class="text-center mt-5">
      <div class="logo d-flex align-center ml-5 pb-15">
        <div class="logo-icon ml-3 mt-5">
          <v-img src="@/assets/images/Logo.png" width="38"></v-img>
        </div>
        <div class="logo-text ml-2 mt-5">
          <v-img  src="@/assets/images/Logo-Text.png"></v-img>
        </div>
      </div>
      <v-divider color="white" class="mt-4"></v-divider>
    </div>
    <v-list dense class="mt-5 list-card">
      <v-list-item-group  color="white">
        <p class="ml-10">Data</p>
        <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.link"
            v-slot="{ active }"
            class="text-sidebar"
        >

          <v-list-item-icon class="ml-6">
            <v-icon
                v-text="item.icon"
                :color="active ? 'black' : '#A6B0CF'"
            ></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
                v-text="item.text"
                :class="active ? 'black--text' : 'text-icon-sidebar'"
                font-size="24"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
      <v-list-item-group v-model="selectedItem" color="white">
        <p class="ml-10">Assets</p>
        <v-list-item
            v-for="(item, i) in items2"
            :key="i"
            :to="item.link"
            v-slot="{ active }"
            class="text-sidebar"
        >

          <v-list-item-icon class="ml-6">
            <v-icon
                v-text="item.icon"
                :color="active ? 'black' : '#A6B0CF'"
            ></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
                v-text="item.text"
                :class="active ? 'black--text' : 'text-icon-sidebar'"
                font-size="24"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
      <v-list-item-group  color="white">
        <p class="ml-10">Authorization</p>
        <v-list-item
            v-for="(item, i) in items3"
            :key="i"
            :to="item.link"
            v-slot="{ active }"
            class="text-sidebar"
        >

          <v-list-item-icon class="ml-6">
            <v-icon
                v-text="item.icon"
                :color="active ? 'black' : '#A6B0CF'"
            ></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
                v-text="item.text"
                :class="active ? 'black--text' : 'text-icon-sidebar'"
                font-size="24"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>


    </v-list>

  </v-navigation-drawer>
</template>

<script>
export default {

  data: () => ({
    selectedItem: 0,
    selectedItem2: 0,
    items: [
      { icon: "mdi-electron-framework", text: "Visualization" },
      { icon: "mdi-briefcase", text: "Case",  },
      { icon: "mdi-inbox-multiple", text: "Data Set",  },
      { icon: "mdi-database", text: "Data Source",link: "/UserManagement"  },
      { icon: "mdi-wifi", text: "Connection",  },
    ],
    items2: [
      { icon: "mdi-sigma", text: "Icon" },
      { icon: "mdi-image", text: "Image" },
    ],
    items3:[
      { icon: "mdi-account", text: "Account" },
      { icon: "mdi-check-circle", text: "Role" },
      { icon: "mdi-briefcase", text: "Workspace"},
    ],

  }),
  }
</script>

<style>
.text-sidebar {
  font-family: "Poppins", sans-serif;
}
.list-card{
  margin-bottom: 35vh;
}
p{
  font-family: 'Rubik', sans-serif !important;
  color: #6A7187 !important;
}
.text-icon-sidebar{
  font-family: 'Rubik', sans-serif;
  color: #A6B0CF !important;
}
</style>
