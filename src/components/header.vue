<template>
<div>
  <v-toolbar class="white" flat dense>
    <router-link to="/"><img src="../assets/inenco.png"></router-link>
    <v-text-field
        hide-details
        append-icon="search"
        color="blue darken-2"
        single-line
      ></v-text-field>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-md-and-down">
      <button  @mouseenter="showManagement()" @mouseleave="hideManagement()" flat 
      class="font-weight-regular dropDownButton">
          Management Center
          <v-icon small>keyboard_arrow_down</v-icon>
      </button>
      <button @mouseenter="showProcurement()" 
      flat 
      @mouseleave="hideProcurement()"
      class="font-weight-regular dropDownButton">
         Procurements Center
          <v-icon small>keyboard_arrow_down</v-icon>
        </button>
      <button flat 
      @mouseenter="showSolutions()"
      @mouseleave="hideSolutions()"
      class="font-weight-regular dropDownButton">
          Solutions Center
          <v-icon small>keyboard_arrow_down</v-icon>
        </button>
      <button flat 
      @mouseenter="showService()"
      @mouseleave="hideService()"
      class="font-weight-regular dropDownButton">
          Service Center
          <v-icon small>keyboard_arrow_down</v-icon>
        </button>
      <button flat 
      @mouseenter="showAccount()"
      @mouseleave="hideAccount()"
      class="font-weight-regular dropDownButton">
          Account Center
          <v-icon small>keyboard_arrow_down</v-icon>
        </button>


      </v-toolbar-items>
  </v-toolbar>
  <account-menu></account-menu>
  <management-menu></management-menu>
  <procurement-menu></procurement-menu>
  <service-menu></service-menu>
  <solutions-menu></solutions-menu>
  <hr>
  </div>
</template>
<script>
import accountMenu from './account_menu.vue';
import managementMenu from './management_menu.vue';
import procurementMenu from './procurement_menu.vue';
import serviceMenu from './service_menu.vue';
import solutionsMenu from './solutions_menu.vue';
    export default{
        components:{
            accountMenu,
            managementMenu,
            procurementMenu,
            serviceMenu,
            solutionsMenu
        },
      methods:{
        showManagement(){
          
          this.$store.state.management_menu_visible=true;
        },
        hideManagement(){
          
          this.$store.state.management_menu_visible=false;
        },
        showProcurement(){
          
          this.$store.state.procurement_menu_visible=true;
        },
        hideProcurement(){
          
          this.$store.state.procurement_menu_visible=false;
        },
        showSolutions(){
          
          this.$store.state.solutions_menu_visible=true;
        },
        hideSolutions(){
          
          this.$store.state.solutions_menu_visible=false;
        },
        showService(){
          
          this.$store.state.service_menu_visible=true;
        },
        hideService(){
          
          this.$store.state.service_menu_visible=false;
        },
        showAccount(){
          
          this.$store.state.account_menu_visible=true;
        },
        hideAccount(){
          
          this.$store.state.account_menu_visible=false;
        }

        
      }

    }
</script>
<style scoped>
  .dropDownButton{
    font-size: 1rem;
    margin:0;
    font-family: "Roboto", serif;
    padding-right: 0.5rem;
    
  }
  hr{
    height:2px;
    background-color:#003843;
    border:none;
  }
</style>

