<template>
<v-app>
    <div id="dragAndDrop">
        <v-container fluid>
            <v-layout row wrap>
                <v-flex xs12>
                    <div id="fileDropArea"
                    @dragenter="fileUpload"
                    @dragleave="fileUpload"
                    @dragover="fileUpload"
                    @drop="fileUpload"
                    >
                    <h1>Drag and drop files here</h1>
                    <h2>Or</h2>
                    <input type="file" id="fileInput" @change="showDetails">
                    <label for="fileInput" id="labelForInputFile">Upload file</label>
                    <div>
                        <span v-for="file in files" :key="file.id">{{file}}  </span>
                    </div>
                    
                    </div>
                </v-flex>
                <v-flex xs12 id="filterArea">
                    <v-flex xs12 class="addSomePadding">
                    <v-layout>
                    <v-flex xs12>
                        <p>Filter</p>
                    </v-flex>
                    </v-layout>
                    <v-layout row wrap justify-space-between>
                    <v-flex xs12 md2 >
                        <v-select 
                        @input="updateObject"
                        flat
                        solo 
                        v-model="selectedAuthor"
                        background-color="white" 
                        :items="authors" label="Author"></v-select>
                    </v-flex>
                    <v-flex xs12 md2>
                        <v-select
                        @input="updateObject"
                        flat                 
                        solo
                        chips
                        multiple
                        v-model="selectedFileType"
                        background-color="white" 
                        :items="fileTypes"  
                        label="File Type"></v-select>
                    </v-flex>
                    <v-flex xs12 md2>
                        <v-select 
                        @input="updateObject"
                        flat 
                        v-model="selectedCategory"
                        background-color="white" 
                        :items="categories" 
                        label="Category"
                        solo
                        ></v-select>
                    </v-flex>
                    <v-flex xs12 md2>
                        <v-menu
                            ref="menuDateFrom"
                            :close-on-content-click="false"
                            v-model="menuDateFrom"
                            :nudge-right="40"
                            :return-value.sync="dateFrom"
                            lazy
                            transition="scale-transition"
                            offset-y
                            full-width
                            min-width="290px"
                        >
                            <v-text-field
                            solo
                            flat
                            slot="activator"
                            v-model="dateFrom"
                            label="Date From"
                            readonly
                            ></v-text-field>
                            <v-date-picker v-model="dateFrom" no-title scrollable>
                            <v-spacer></v-spacer>
                            <v-btn flat color="primary" @click="menuDateFrom = false">Cancel</v-btn>
                            <v-btn flat color="primary" @click="$refs.menuDateFrom.save(dateFrom)">OK</v-btn>
                            </v-date-picker>
                        </v-menu>
                        
                    </v-flex>
                    <v-flex xs12 md2>
                        <v-menu
                            ref="menuDateTo"
                            :close-on-content-click="false"
                            v-model="menuDateTo"
                            :nudge-right="40"
                            :return-value.sync="dateTo"
                            lazy
                            transition="scale-transition"
                            offset-y
                            full-width
                            min-width="290px"
                        >
                            <v-text-field
                            solo
                            flat
                            slot="activator"
                            v-model="dateTo"
                            label="Date To"
                            readonly
                            ></v-text-field>
                            <v-date-picker  
                            v-model="dateTo" no-title scrollable>
                            <v-spacer></v-spacer>
                            <v-btn flat color="primary" @click="menuDateTo = false">Cancel</v-btn>
                            <v-btn flat color="primary" @click="$refs.menuDateTo.save(dateTo)">OK</v-btn>
                            </v-date-picker>
                        </v-menu>
                        
                    </v-flex>
                    </v-layout>
                    <v-layout column align-end>
                        <v-flex xs1>
                            <v-btn class="button" color="error">Reset</v-btn>
                        </v-flex>
                    </v-layout>
                    </v-flex>
                </v-flex>
            </v-layout>            
            </v-container>
        </div>  
</v-app>  
</template>

<script>
export default {
  data() {
    return {
      dateFrom:null,
      menuDateFrom:false,
      dateTo:null,
      menuDateTo:false,
      files: [],
      selectedAuthor: null,
      selectedFileType: [],
      selectedCategory: null,
      filterParameters: {},
      authors: ["Myself", "Someone", "Someone Else"],
      fileTypes: ["pdf", "png", "xslv", "csv"],
      categories:['Import','Export']
    };
  },
  methods: {
      fileUpload(event){
          event.preventDefault();
          event.stopPropagation();
          if(event.type==='drop' || event.type==='change'){
              console.log('Started Transfer');
              let dt=event.dataTransfer;
              let files=dt.files;
              let paragraph=document.createElement('p');
              paragraph.innerHTML=files[0].name;
              document.getElementById('fileDropArea').appendChild(paragraph);
              let formData=new FormData();
              console.log(files);
              formData.append('file',files);
              files=[...files];
              files.forEach(this.previewFile);
          }
         
          
      },
      previewFile(file){
          let reader=new FileReader();
          reader.readAsDataURL(file);
          reader.onloadend=()=>{
              let img=document.createElement('p');
              img.src=reader.result;
              //document.getElementById('fileDropArea').appendChild(img);
          }
      },
    showDetails(event) {
      let inputFile = document.getElementById("fileInput");
      this.files.push(inputFile.files.item(0).name);
      //this.fileUpload(event);
    }
  },
  computed: {
    updateObject() {
      this.filterParameters.author = this.selectedAuthor;
      this.filterParameters.fileType = this.selectedFileType;
      this.filterParameters.category = this.selectedCategory;
      this.filterParameters.dateFrom = this.dateFrom;
      this.filterParameters.dateTo = this.dateTo;
      console.log(this.filterParameters);
    }
  }
};
</script>

<style scoped>
.addSomePadding {
  padding: 1%;
}
#dragAndDrop {
}
#fileDropArea {
  text-align: center;
  border: 1px dashed grey;
  color: black;
  background-color: #eceded;
}
#fileDropArea h1
 {
  margin: 2% 0 0 0;
  color: #000;
}
#fileDropArea h2{
    margin:0 0 2% 0;
}
#fileInput {
  display: none;
}
#labelForInputFile {
  color:white;
  display: inline-block;
  background-color: #003843;
  padding: 5px 2px 5px 2px;
  margin-bottom: 1%;
  cursor:pointer;
}
#filterArea {
  background-color: #a8abab;
  margin-top: 2%;
  color: white;
}
.button {
  margin: 0%;
}
</style>
