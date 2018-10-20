import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    
      management_menu_visible:false,
      procurement_menu_visible:false,
      solutions_menu_visible:false,
      service_menu_visible:false,
      account_menu_visible:false
  
  },
  mutations: {},
  actions: {}
});
