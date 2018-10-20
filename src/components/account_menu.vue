<template>
    <div id="account_menu_position"
    v-if="this.$store.state.account_menu_visible"
    @mouseenter="keepShowing()"
    @mouseleave="hideIt()"
    >
        <v-container fluid class="blue-grey darken-4">
            <v-layout row wrap>
                <img src="../assets/m_Center.svg" style="height:50px;width:50px;margin-right:1%" 
                class="orange darken-1">
                <span style="font-family:roboto;color:white;"
                class="font-weight-medium display-1">
                Account Center</span>
            </v-layout>
            <hr style="width:100%">
            <v-layout row>
                
                <v-flex class="list_flex" xs4 v-for="item in options" :key=item.id>
                    <span style="font-family:roboto;color:white;"
                    class="font-weight-regular title">
                    {{item.title}}</span>
                    <ul style="color:white;">
                        <li v-for="item in item.items" :key="item.id">
                        <a href="#" >{{item}}</a>
                        </li>
                    </ul>
                
                </v-flex>
            </v-layout>

            
        </v-container>
    </div>
</template>
<script>
export default {
    data(){
        return{
            show:false,
            options:[
                {
                    title:'Organisation Management',
                    items:['Edit Organisation','Add Sub-organisation','Manage Sub-organisations','Account Team']
                },
                {
                    title:'Billing & Management',
                    items:['Payment Details','Invoice','Contact Us']
                },
                {
                    title:'My Profile',
                    items:['Change Password','Switch Account','Contacts','Sign Out']
                }

        ]
    };
    },
    methods:{
        keepShowing(){
            this.$store.state.account_menu_visible=true;
        },
        hideIt(){
           this.$store.state.account_menu_visible=false; 
        }
    }
}
</script>
<style scoped>
#account_menu_position{
    width:100%;
    position: absolute;
    z-index: 1;
    box-shadow:5px 10px 18px #888888;;

}
    .list_flex{
        margin-left: 5%;
        margin-top:2%;
    }
    li{
    font-family: roboto;
    color:#FB8C00;
    margin:15px 0;
    
    
  }
  li>a{
    color:white;
    text-decoration: none;
  }

</style>