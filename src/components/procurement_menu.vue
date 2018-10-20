<template>
    <div id="procurement_menu_position" v-if="this.$store.state.procurement_menu_visible"
    @mouseenter="keepShowing()"
    @mouseleave="hideIt()"
    >
        <v-container fluid class="blue-grey darken-4">
            <v-layout row wrap>
                <img src="../assets/p_Center.svg" style="height:50px;width:50px;margin-right:1%" 
                class="blue darken-1">
                <span style="font-family:roboto;color:white;"
                class="font-weight-medium display-1">
                Procurement Center</span>
            </v-layout>
            <hr style="width:100%">
            <v-layout row>
                
                <v-flex class="list_flex" xs3 v-for="item in options" :key=item.id>
                    <span style="font-family:roboto;color:white;"
                    class="font-weight-regular title">
                    {{item.title}}</span>
                    <ul style="color:white;">
                        <li @click.prevent="hideIt()" v-for="item in item.items" :key="item.id">
                        <router-link to="/oqlik" >{{item}}</router-link>
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
                    title:'Market Performance',
                    items:['Heavy Fuel Oil','NBP Gas','UK Baseload','UK Peak']
                },
                {
                    title:'Trading',
                    items:['Budgets',' Triggers','Traders','Contracts']
                },
                {
                    title:'Management Reports',
                    items:['Position Report ',' Trading Chart','Volume Chart','Capacity Report']
                },
                {
                    title:'Dashboard',
                    items:['Mark To Market','Virtual Caps','Trading Position',]
                }

        ]
    };
},
methods:{
    keepShowing(){
        this.$store.state.procurement_menu_visible=true;
    },
    hideIt(){
        this.$store.state.procurement_menu_visible=false;
    }
}
}
</script>
<style scoped>
#procurement_menu_position{
    width:100%;
    position: absolute;
    z-index: 1;
    box-shadow: 5px 10px 18px #888888;;
}
    .list_flex{
        margin-left: 5%;
        margin-top:2%;
    }
    li{
    font-family: roboto;
    color:#1E88E5;
    margin:15px 0;
    
    
  }
  li>a{
    color:white;
    text-decoration: none;
  }

</style>
