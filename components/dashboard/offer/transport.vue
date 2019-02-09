<template>
<div  >
   <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :on-cancel="onCancel"
        :is-full-page="false"></loading>
<!-- Offering transport -->


 <b-alert variant="danger "  :show="showAlert"  ref="alert">
     {{showAlertMessage}}
    </b-alert>
<b-button   variant="primary" :disabled="notNext" @click="backClicked">
  Back
</b-button>

<div v-if="notNext">
  <h2 class="text-center">TRANSPORT</h2>

<div class="row">
<div class="col col-lg-6 col-12 col-sm-12">
  <label >Addres From</label>
    <b-input-group>
  <b-input-group-prepend>
    <span class="input-group-text"><i class="fa fa-address-book fa-lg"></i></span>
  </b-input-group-prepend>
  <b-form-input
   class="LoginInput" size="lg" v-model="firstForm.address_from" ref="addressFromReference" placeholder="Address From">
  </b-form-input>
   <b-input-group-prepend @click="currentLocationFrom">
    <span class="input-group-text bg-white" >
<svg width="30px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 157.89 157.89">
   <defs>
      <style>.cls-1{fill:#fff;}.cls-1,.cls-2{stroke:#ecba3d;stroke-miterlimit:10;stroke-width:4px;}.cls-2{fill:none;}.cls-3{fill:#ecba3d;}</style>
   </defs>
   <title>Address From</title>
   <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
         <circle class="cls-1" cx="78.95" cy="78.95" r="58.95"/>
         <line class="cls-2" x1="78.95" x2="78.95" y2="20"/>
         <line class="cls-2" x1="157.89" y1="78.95" x2="137.89" y2="78.95"/>
         <line class="cls-2" x1="78.95" y1="157.89" x2="78.95" y2="137.89"/>
         <line class="cls-2" y1="78.95" x2="20" y2="78.95"/>
         <circle class="cls-3" cx="78.95" cy="78.95" r="48.28"/>
      </g>
   </g>
</svg>

    </span>
  </b-input-group-prepend>
</b-input-group>
</div>

<div class="col col-lg-6 col-12 col-sm-12">
  <label >Addres To</label>
    <b-input-group>
  <b-input-group-prepend>
    <span class="input-group-text"><i class="fa fa-address-book fa-lg"></i></span>
  </b-input-group-prepend>
  <b-form-input
   class="LoginInput" size="lg" v-model="firstForm.address_to" ref="addressToReference" placeholder="Address to">
  </b-form-input>
   <b-input-group-prepend @click="currentLocationTo">
    <span class="input-group-text bg-white" >
<svg width="30px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 157.89 157.89">
   <defs>
      <style>.cls-1{fill:#fff;}.cls-1,.cls-2{stroke:#ecba3d;stroke-miterlimit:10;stroke-width:4px;}.cls-2{fill:none;}.cls-3{fill:#ecba3d;}</style>
   </defs>
   <title>Address To</title>
   <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
         <circle class="cls-1" cx="78.95" cy="78.95" r="58.95"/>
         <line class="cls-2" x1="78.95" x2="78.95" y2="20"/>
         <line class="cls-2" x1="157.89" y1="78.95" x2="137.89" y2="78.95"/>
         <line class="cls-2" x1="78.95" y1="157.89" x2="78.95" y2="137.89"/>
         <line class="cls-2" y1="78.95" x2="20" y2="78.95"/>
         <circle class="cls-3" cx="78.95" cy="78.95" r="48.28"/>
      </g>
   </g>
</svg>

    </span>
  </b-input-group-prepend>
</b-input-group>
</div>

</div>


<div>
  <label >Date / Time</label>
  
 <datetime
  type="datetime"
  v-model="firstForm.dateTime"
  input-class="form-control"
  :format="{ year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: '2-digit' }"
  :phrases="{ok: 'Continue', cancel: 'Exit'}"
  use12-hour
  auto
  ></datetime>
</div>




<div>
  <label >Price Type</label>
    <b-input-group>
  
  <b-form-checkbox class="LoginInput" v-model="firstForm.free" size="lg" placeholder="Price" >
  </b-form-checkbox>
  Free
   
</b-input-group>
</div>

<div v-if="!firstForm.free"> 
  <label >Price</label>
    <b-input-group>
      <b-input-group-prepend>
    <span class="input-group-text">$</span>
  </b-input-group-prepend>

  <b-form-input type="number" v-model="firstForm.price"  class="LoginInput" size="lg" placeholder="Price" >
  </b-form-input>
   
</b-input-group>
</div>

  <br>
<b-button type="submit" @click.prevent="next" variant="primary" class="col">Next</b-button>

	</div>
	
    <div v-if="!notNext">
<h2 class="text-center">TRANSPORT DETILS</h2>
        <div>
  <label >Title</label>
    <b-input-group>

  <b-form-input  v-model="secondForm.title" size="lg" placeholder="Title">
  </b-form-input>
   
</b-input-group>
</div>

<div>
  <label >Description</label>
    <b-input-group>

  <b-form-textarea v-model="secondForm.description" size="lg"
   placeholder="Description" rows="5">
  </b-form-textarea>
   
</b-input-group>
</div>


<div>
  <label >Choose Number of Pessingers</label>
    <b-input-group>
  <b-input-group-prepend>
    <span class="input-group-text"><i class="fa fa-users fa-lg"></i></span>
  </b-input-group-prepend>
  <b-form-select size="lg"   v-model="secondForm.pessingerSelected" :options="secondForm.pessingerOptions" class="LoginInput form-control" />
    
  
</b-input-group>
</div>


<div>
  <label >Add Vehicle Details</label>
 <b-input-group>
     <b-form-input placeholder="Name" v-model="secondForm.vName"  class="col-8">

     </b-form-input>
     <b-form-input class="col-4" placeholder="Model " v-model="secondForm.vModel" >

     </b-form-input>

 </b-input-group>

    <b-input-group>
  <b-input-group-prepend>
    <span class="input-group-text"><i class="fa fa-car fa-lg"></i></span>
  </b-input-group-prepend>
  <b-form-select size="lg"  
   v-model="secondForm.vehicleSelected" 
   :options="secondForm.vehicleOptions" 
   class="LoginInput form-control" />
    
  
</b-input-group>
</div>


<div> 
  <label >Images</label>
    <b-input-group>
    
 <b-form-file ref="images"  multiple v-on:change="handleFileUpload" placeholder="Choose a file...">

 </b-form-file>
 

</b-input-group>
</div>
<div class="row" style="width:40%; border:1px solid; margin-top:10px;" v-for="(value,id) in this.secondForm.images" :key="id">
 
    <div class="col-9" style="border-right:1px solid; overflow:hidden;">
        <label >{{value.name}}</label>
       
    </div>
    <div class="col-3">
       <span
       @click="secondForm.images.splice(id, 1)"
        class="btn btn-danger fa fa-trash btn-circle"></span>
    </div>

 </div>
<br>
  <div>
<b-button type="submit" @click.prevent="post" variant="info" class="col">Post</b-button>
</div>

    </div>
</div>
</template>
<script>
    // Import component
    import Loading from 'vue-loading-overlay';
    // Import stylesheet 
    import 'vue-loading-overlay/dist/vue-loading.css';
    
    import axios from "axios";

import { Datetime } from 'vue-datetime';
 import 'vue-datetime/dist/vue-datetime.css';
    
export default{
  components:{Loading,Datetime},
data () {
    return {
        optional:[
            "free"
        ],
      autocomplete:null,
      autocomplete2:null,
      notNext: true,
      showAlert:false,
      showAlertMessage:"",
      free:false,
      isLoading:false,
      firstForm:{
            longFrom:10,
            latFrom:12,
            longTo:10,
            latTo:12,
            address_from:"",
            address_to:"",
            dateTime:"",
            free:false,
            price:"", 
      },
      secondForm:{
        title:"",
        description:"",
        images:[] ,
         pessingerSelected: null,
        pessingerOptions: [
            { value: null, text: 'Choose Pessingers.. ' },
            { value: '1', text: '1 Persons' },
            { value: '2', text: '2 Persons' },
            { value: '3', text: '3 Persons' },
            { value: '4', text: '4 Persons' },
            { value: '5', text: '5 Persons' },
            { value: '6', text: '6 Persons' },
            { value: '7', text: '7 Persons' },
            { value: '8', text: '8 Persons' },
            { value: '9', text: '9 Persons' },
            { value: '10', text: '10 Persons' },
      ],
       vehicleSelected:null,
        vehicleOptions: [
            {value:null,text:"Choose Year.."}
                    ],
        vName:"",
        vModel:""
      }
    }
  },mounted(){
 let year=new Date().getFullYear();

      for(let i=year; i>=1990;i--){
            this.secondForm.vehicleOptions.push({value:i, text:i});
      }
            this.autocomplete = new this.$google.maps.places.Autocomplete(this.$refs.addressFromReference.$el,
                {
                    types: ['geocode'],
                },
                                                                        );

                                this.autocomplete.addListener('place_changed', () => {
                                let place = this.autocomplete.getPlace();
                                let ac = place.address_components;
                                let lat = place.geometry.location.lat();
                                let lon = place.geometry.location.lng();
                                let city = ac[0]["short_name"];
                                this.latFrom=lat;
                                this.longFrom=lon;
                                                                                    });
     
     this.autocomplete2 = new this.$google
     .maps
     .places
     .Autocomplete(this.$refs.addressToReference.$el,
      {
        types: ['geocode'],
      },
    );
    this.autocomplete2.addListener('place_changed', () => {
                                        let place = this.autocomplete2.getPlace();
                                        let ac = place.address_components;
                                        let lat = place.geometry.location.lat();
                                        let lon = place.geometry.location.lng();
                                        let city = ac[0]["short_name"];
                                        this.latTo=lat;
                                        this.longTo=lon;
                                                        });
},
  methods:{
      deletePicture(id){
          
      },
    backClicked(){
      this.notNext=true;
    },
     inArray(needle, haystack) {
                    var length = haystack.length;
                    for(var i = 0; i < length; i++) {
                        if(haystack[i] == needle) return true;
                    }
                    return false;
                },
                getTime(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
},
getDate(date){
    var year = date.getFullYear();
  var month = date.getMonth()+1;
  var day = date.getDate();
 var strDate = day + '-' + month + '-' + year;
  return strDate;
},
    handleFileUpload($e){
        let files=$e.target.files;
        let _this=this;
        Object.keys(files).forEach(function(key) {
 _this.secondForm.images.push(files[key]) 
  

});
        
     },
    currentLocationFrom(){
     console.log( this.$google.maps.places)
    },
    currentLocationTo(){
     console.log( this.$google.maps.places)
    },
    next(){
        


                        this.showAlert=false;
                        let obj=this.firstForm;
                        let error= "";
                        for(let val in this.firstForm){
                            if(
                (this.firstForm[val]==null || this.firstForm[val]=="" && !this.inArray(val,this.optional))
                                ){
                                   
                                   if(val=="price" && this.firstForm.free==true){
                                       continue;
                                   }

                            error=val.toUpperCase()+" Cannot be empty";
                            break;
                            }
                        }

                        Object.keys(this.firstForm).forEach(function(key){
                        if(obj[key]==null){
                        error=key+" Cannot be empty";
                        return;
                        }
                        })
                        this.showAlertMessage=error;
                        if(this.showAlertMessage!==""){
                        this.showAlert=true
                    return ;
                        }
                    this.notNext=false;
    },
    post(){

                    this.isLoading=true;
                    let params=new FormData();
                    params.set("userId",        this.$store.state.userInfo.userId); 
                    params.set("latitude_f",    this.firstForm.latFrom);
                    params.set("longitude_f",   this.firstForm.latFrom);
                    params.set("latitude_t",    this.firstForm.latFrom);
                    params.set("longitude_t",   this.firstForm.latFrom);
                    params.set("address_from",  this.firstForm.address_from);
                    params.set("address_to",    this.firstForm.address_to);
                    params.set("title",         this.secondForm.title);
                    params.set("description",   this.secondForm.description);
                    params.set("pessingers",    this.secondForm.pessingerSelected);        
                    params.set("vehicle_model", this.secondForm.vModel);
                    params.set("vehicle_name",  this.secondForm.vName);
                    params.set("vehicle_year",  this.secondForm.year);
                    
                    params.set("price",  this.firstForm.free==true?0:this.firstForm.price);
params.set("pickup_date", this.getDate(new Date(this.firstForm.dateTime)));
params.set("pickup_time",  this.getTime(new Date(this.firstForm.dateTime)));


                    let ins=this.secondForm.images.length;
                    for (var x = 0; x < ins; x++) {
                        params.append("image_"+(x+1),   this.secondForm.images[x]);
                    }
                    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
                    axios.post(process.env.baseUrl+"/transport",params,config)
                    .then((response) => {
                        if(response.data.status==200){
                            this.$store.state.message="Transport Have been added Successfully !";
                        this.$router.push('/dashboard/')
                    }else{
                        this.showAlertMessage=response.data.message;
                        this.showAlert=true
                        }
                    }) .catch(error => {
                        console.log(error)
                        
                        // his.errored = true
                    })
                    .finally(() => this.isLoading=false);      
            },
    onCancel(){

    }, 
     generateBase64(file) {
      var base64 = "";
      var canvas = document.createElement('CANVAS');
      var img = document.createElement('img');
      
      img.src = file.mozFullPath;
      
      
      img.onload = function () {
        canvas.height = img.height;
        canvas.width = img.width;
        base64 = canvas.toDataURL('image/png');
        canvas = null;
      };
      img.onerror = function (error) {
        _this.error = 'Could not load image, please check that the file is accessible and an image!';
      };
      console.log(base64)
      return base64;
    }
  }
}


</script>
<style>

body .btn-circle {
    width: 30px;
    height: 30px;
    padding: 6px 0px;
    border-radius: 15px;
    text-align: center;
    font-size: 12px;
    line-height: 1.42857;
    margin-top:5px;
    margin-bottom:5px;
}
</style>