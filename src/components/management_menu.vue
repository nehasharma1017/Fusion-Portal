<template>
    <div id="management_menu_position"
    v-if="this.$store.state.management_menu_visible"
    @mouseenter="keepShowing()"
    @mouseleave="hideIt()"
    >
        <v-container fluid class="blue-grey darken-4">
            <v-layout row wrap>
                <img src="../assets/m_Center.svg" style="height:50px;width:50px;margin-right:1%" 
                class="pink darken-1">
                <span style="font-family:roboto;color:white;"
                class="font-weight-medium display-1">
                Management Center</span>
            </v-layout>
            <hr style="width:100%">
            <v-layout row>
                
                <v-flex class="list_flex" xs3 v-for="item in options" :key=item.id>
                    <span style="font-family:roboto;color:white;"
                    class="font-weight-regular title">
                    {{item.title}}</span>
                    <ul style="color:white;">
                        <li @click.prevent="hideIt()" v-for="item in item.items" :key="item.id">
                        <router-link to="/qlik" >{{item}}</router-link>
                        
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
                    title:'Assets and Portfolios',
                    items:['Sites','Meter','Meter Contracts','AMR']
                },
                {
                    title:'Insights',
                    items:['Usage','Supplier Invoices','Journaling','Budgets and Accurals']
                },
                {
                    title:'Management Records',
                    items:['Report Delievery ','Report Records']
                },
                {
                    title:'Dashboard',
                    items:['Waste','Documents','Uploads','Contacts']
                }

        ]
    };
    },
    methods:{
        keepShowing(){
            
            this.$store.state.management_menu_visible=true;
            
        },
        hideIt(){
           this.$store.state.management_menu_visible=false; 
           
        }
    }
}
</script>
<style scoped>
#management_menu_position{
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
    color:#D81B60;
    margin:15px 0;
    
    
  }
  li>a{
    color:white;
    text-decoration: none;
  }

</style>

