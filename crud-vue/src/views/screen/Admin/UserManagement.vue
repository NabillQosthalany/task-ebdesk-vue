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
      <div class="text-lorem d-flex justify-end mt-5">
        <h2>Logoipsum /<span>Usermanagement</span></h2>
      </div>
              <v-card class="mx-auto" width="1000">
                <v-app-bar
                    dark
                    color="#2c3a47">
                  <v-btn icon>
                    <v-icon>local_offer</v-icon>
                  </v-btn>
                  <v-toolbar-title>Data</v-toolbar-title>
                  <v-spacer/>
                  <v-dialog v-model="dialog" persistent max-width="800px">
                    <template v-slot:activator="{on}">
                      <v-btn color="blue" v-on="on" outlined>
                        <v-icon left>add</v-icon>Add
                      </v-btn>
                    </template>
                    <v-card>
                      <v-form @submit.prevent="savePost" ref="postData" lazy-validation enctype="multipart/form-data" aria-autocomplete="off">
                        <v-card-title>
                          <span class="headline">{{ this.saveDialog === 'Save' ? 'Save Data' : 'Edit Data' }}</span>
                        </v-card-title>
                        <v-card-text>
                          <v-container grid-list-md>
                            <v-layout wrap>
                              <v-row>
                                <v-col cols="6">
                                  <v-flex xs12 sm12 md12>
                                    <v-text-field label="Name"
                                                  v-model="postData.firstName"
                                                  color="#2c3a47">
                                    </v-text-field>
                                  </v-flex>
                                </v-col>
                                <v-col cols="6">
                                  <v-flex xs12 sm12 md12>
                                    <v-text-field label="Username"
                                                  v-model="postData.username"
                                                  color="#2c3a47">
                                    </v-text-field>
                                  </v-flex>
                                </v-col>
                                <v-col cols="6">
                                  <v-flex xs12 sm12 md12>
                                    <v-select
                                        color="#2c3a47"
                                        :items="items"
                                        label="Gender"
                                        v-model="postData.gender"
                                    >
                                    </v-select>
                                  </v-flex>
                                </v-col>
                                <v-col cols="6">
                                  <v-flex xs12 sm12 md12>
                                    <v-text-field label="Email"
                                                  v-model="postData.email"
                                                  color="#2c3a47">
                                    </v-text-field>
                                  </v-flex>
                                </v-col>
                              </v-row>
                            </v-layout>
                          </v-container>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer/>
                          <v-btn
                              color="#3c3a47"
                              dark
                              @click="close"
                              outlined
                              small>
                            <v-icon left>exit_to_app</v-icon>Close
                          </v-btn>
                          <v-btn color="light-green darken-4" dark type="submit" outlined small>
                            <v-icon left>save</v-icon>
                            {{ saveDialog }}
                          </v-btn>
                        </v-card-actions>
                      </v-form>
                    </v-card>
                  </v-dialog>
                </v-app-bar>
                <v-container>
                  <v-card class="mx-auto elevation-19">
                    <v-card-title>
                      <v-spacer/>
                      <v-text-field
                          v-model="search"
                          append-icon="search"
                          label="Search"
                          Single-line
                          hide-details
                          color="#2c3a47">
                      </v-text-field>
                    </v-card-title>
                    <v-data-table
                        item-key="id"
                        :headers="headers"
                        :items="dataList"
                        :search="search">
                      <template v-slot:item.actions="{ item }">
                        <v-menu offset-y>
                          <template v-slot:activator="{ on }">
                            <v-btn text icon v-on="on">
                              <v-icon>mdi-dots-horizontal</v-icon>
                            </v-btn>
                          </template>
                          <v-list width="250">
                            <v-list-item @click="editPost(item)">
                              <v-list-item-icon>
                                <v-icon>mdi-pencil</v-icon>
                              </v-list-item-icon>
                              <v-list-item-title class="title-item">Edit</v-list-item-title>
                            </v-list-item>
                            <v-list-item @click.prevent="deletePost(item.id)">
                              <v-list-item-icon>
                                <v-icon>mdi-delete</v-icon>
                              </v-list-item-icon>
                              <v-list-item-title class="title-item">Delete</v-list-item-title>
                            </v-list-item>
                          </v-list>
                        </v-menu>
                      </template>

                      <template v-slot:no-results>
                        <v-alert :value="true" color="#2c3a47" icon="warning" dark>
                          User {{search}} does exits
                        </v-alert>
                      </template>
                    </v-data-table>
                  </v-card>
                </v-container>
              </v-card>
    </div>
  </v-app>
</template>
<script>
import SideBar from "@/components/SideBar";
import axios from "axios";
import Swal from "sweetalert2";
export default {
  components: {SideBar},
  data:()=>({
    headers:[
      {text: 'id',value: 'id',sortable: true},
      {text: 'Name',value: 'firstName'},
      {text: 'Username',value: 'username'},
      {text: 'Email',value: 'email'},
      {text: 'Gender',value: 'gender'},
      {text: 'Action',value: 'actions'}
    ],
    dataList:[],
    dialog:false,
    search:'',
    postData:{
      id:0,
      firstName:'',
      username:'',
      gender:'',
      email:''
    },
    default:{
      id:0,
      firstName:'',
      username:'',
      gender:'',
      email:''
    },
    items: ['male', 'female'],
    editedIndex:-1,
  }),
  watch:{
    dialog(val){
      val || this.close()
    }
  },
  computed:{
    saveDialog(){
      return this.editedIndex === -1 ? 'Save' : 'Edit'
    },
  },
  created() {
    this.loadPosts()
  },
  methods:{
    loadPosts:async function(){
      const apiURL = 'https://dummyjson.com/users'
      axios.get(apiURL)
          .then(res =>{
            this.dataList = Object.values(res.data.users)
          }).catch(err =>{
        console.log(err)
      })
    },
    onScroll(e){
      if(typeof window === 'undefined')return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop(){
      this.$vuetify.goTo(0)
    },
    close(){
      this.dialog = false
      setTimeout(() =>{
        this.postData = Object.assign({},this.default)
        this.editedIndex = -1
      },3000)
    },
    savePost:async function(){
      if(this.editedIndex > -1){
        this.updateData()
      }else{
        this.createPost()
      }
    },
    createPost(){
      let apiUrl = 'https://dummyjson.com/users/add'
      axios.post(apiUrl,this.postData)
          .then(res=>{
            this.postData={
              firstName:'',
              userName:'',
              gander:'',
              email:''
            }
            Swal.fire({
              icon: 'success',
              title: 'Data Has Been Created',
              showConfirmButton: false,
              timer: 1500
            })
            this.close()
            this.color = 'success'
            this.text = 'Post has been successfully added'
            this.snackbar = true
            this.dataList.push(res.data)
          }).catch(err =>{
        console.log(err)
      })
    },
    editPost(item){
      console.log(item)
      this.editedIndex = this.dataList.indexOf(item)
      this.postData = item
      this.dialog = true
    },
    updateData(){
      const id = this.postData.id
      let apiURL = `https://dummyjson.com/users/${id}`
      axios.put(apiURL,this.postData)
          .then((res)=>{
            console.log(res)
            this.close()
            const updatedIndex = this.dataList.findIndex(item => item.id === id);
            if (updatedIndex !== -1) {
              this.dataList[updatedIndex].gender = res.data.gender;
            }
            Swal.fire({
              icon: 'success',
              title: 'Data Has Been Updated',
              showConfirmButton: false,
              timer: 1500
            })
            this.color = 'info'
            this.text = 'Success updated data'
            this.snackbar = true
          }).catch(err =>{
        console.log(err)
      })
    },
    deletePost(id) {
      this.$swal({
        title: 'Are you sure?',
        text: "You will not be able to go back",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#00b894',
        cancelButtonColor: '#d63031',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
      }).then((result) => {
        if (result.isConfirmed) {
          try {
            let apiURL = `https://dummyjson.com/users/${id}`;
            let indexOfArrayItem = this.dataList.findIndex(i => i.id === id);
            axios.delete(apiURL).then(() => {
              this.dataList.splice(indexOfArrayItem, 1);
            }).catch(error => {
              console.log(error)
            });
            this.$swal(
                'Deleted!',
                'Post has been deleted.',
                'success'
            )
            //Notification error
            this.color = 'error'
            this.text = "Post has been deleted."
            this.snackbar = true;
            //Notification error
          } catch (error) {
            this.$swal("Failed!", "There was something wrong.", "warning");
          }
        }
      })
    },
    handleLogout(){
      sessionStorage.removeItem('token');
      this.$router.push('/')
    },

    },
}
</script>
<style scoped>
.content{
  height: 100vh;
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
span{
  font-family: 'Rubik', sans-serif;
  font-weight: 600;
}
.title-item{
  font-family: 'Inter', sans-serif;
  font-size: 14px;
}
</style>

