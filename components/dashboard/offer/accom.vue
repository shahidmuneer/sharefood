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
  <h2 class="text-center">ACCOMMUDATION</h2>
<div>
  <label >Location</label>
    <b-input-group>
  <b-input-group-prepend>
    <span class="input-group-text"><i class="fa fa-address-book fa-lg"></i></span>
  </b-input-group-prepend>
  <b-form-input
   class="LoginInput" size="lg" v-model="firstForm.location" ref="locationReference" placeholder="Current Location">
  </b-form-input>
   <b-input-group-prepend @click="currentLocation">
    <span class="input-group-text bg-white" >
<svg width="30px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 157.89 157.89">
   <defs>
      <style>.cls-1{fill:#fff;}.cls-1,.cls-2{stroke:#ecba3d;stroke-miterlimit:10;stroke-width:4px;}.cls-2{fill:none;}.cls-3{fill:#ecba3d;}</style>
   </defs>
   <title>Location</title>
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



<div>
  <label >Number of Bedrooms</label>
    <b-input-group>
  <b-input-group-prepend>
    <span class="input-group-text"><i class="fa fa-bed fa-lg"></i></span>
  </b-input-group-prepend>
  <b-form-select size="lg"   v-model="firstForm.selectedBedRooms" :options="firstForm.bedRoomsOptions" class="LoginInput form-control" />
    
  
</b-input-group>
</div>


<div>
  <label >Number of Bathrooms</label>
    <b-input-group>
  <b-input-group-prepend>
    <span class="input-group-text"><i class="fa fa-bath fa-lg"></i></span>
  </b-input-group-prepend>
  <b-form-select size="lg"   v-model="firstForm.selectedBathRooms" :options="firstForm.bathRoomsOptions" class="LoginInput form-control" />
    
  
</b-input-group>
</div>


<div>
  <label >Furniture (optional)</label>
    <b-input-group>
  <b-input-group-prepend>
    <span class="input-group-text">
     <img src="~/assets/images/bed.png" width="20px" >
</span>
  </b-input-group-prepend>
  <b-form-select size="lg"   v-model="firstForm.furniture" :options="firstForm.furnitureOptions" class="LoginInput form-control" />
    
  
</b-input-group>
</div>

<div>
  <label >Parking (optional)</label>
    <b-input-group>
  <b-input-group-prepend>
    <span class="input-group-text"><i class="fa fa-car fa-lg"></i></span>
  </b-input-group-prepend>
  <b-form-select size="lg"   v-model="firstForm.parking" :options="firstForm.parkingOptions" class="LoginInput form-control" />
    
  
</b-input-group>
</div>

<div>
  <label >Gender Preferene (optional)</label>
    <b-input-group>
  <b-input-group-prepend>
    <span class="input-group-text"><i class="fa fa-mars-stroke-v fa-lg"></i></span>
  </b-input-group-prepend>
  <b-form-select size="lg"   v-model="firstForm.gender" :options="firstForm.genderOptions" class="LoginInput form-control" />
    
  
</b-input-group>
</div>

<div>
  <label >Pet Friendly (optional)</label>
 
  <b-form-group >
     
      <b-form-checkbox name="petFriendly" v-model="firstForm.petFriendly" value="1">
      </b-form-checkbox>
      Yes
  
      <b-form-checkbox name="petFriendly" v-model="firstForm.petFriendly" value="0">
      </b-form-checkbox>
      No
    </b-form-group>
</div>

  
<b-button type="submit" @click.prevent="next" variant="primary" class="col">Next</b-button>

	</div>
	
    <div v-if="!notNext">
<h2 class="text-center">ACCOMMUDATION DETILS</h2>
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
  <label >Price Type</label>
    <b-input-group>
    <label>

  <b-form-checkbox class="LoginInput" v-model="secondForm.free" size="lg" placeholder="Price" >
  </b-form-checkbox>
  Free
    </label>
</b-input-group>
</div>

<div v-if="!secondForm.free"> 
  <label >Price</label>
    <b-input-group>
      <b-input-group-prepend>
    <span class="input-group-text">$</span>
  </b-input-group-prepend>

  <b-form-input type="number" v-model="secondForm.price"  class="LoginInput" size="lg" placeholder="Price" >
  </b-form-input>
   
</b-input-group>
</div>

<div> 
  <label >Images</label>
    <b-input-group>
    
 <b-form-file ref="images" multiple v-on:change="handleFileUpload" placeholder="Choose a file...">

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
   
const miniToastr={}
    if(process.browser){
            const miniToastr = require('mini-toastr')
          }

import axios from "axios";
export default{
  components:{Loading,miniToastr},
data () {
  
    return {
       optional:[
            "furniture",
            "parking",
            "gender",
            "petFriendly"
        ],
      autocomplete:null,
      notNext: true,
      showAlert:false,
      showAlertMessage:"",
      free:false,
      isLoading:false,
      firstForm:{
      long:10,
      lat:12,
      location:"",
	  selectedBedRooms: null,
      bedRoomsOptions: [
        { value: null, text: 'Choose Number of Bedrooms.. ' },
        { value: '1', text: '1 Bedroom' },
        { value: '2', text: '2 Bedroom' },
        { value: '3', text: '3 Bedroom' },
        { value: '4', text: '4 Bedroom' },
        { value: '5', text: '5 Bedroom' },
        { value: '6', text: '6 or more Bedrooms' },
      ],
      selectedBathRooms: null,
      bathRoomsOptions: [
        { value: null, text: 'Choose Number of Bathrooms.. ' },
        { value: '1', text: '1 Bathrooms' },
        { value: '2', text: '2 Bathrooms' },
        { value: '3', text: '3 Bathrooms' },
        { value: '4', text: '4 or more Bathrooms' },

      ],
         furniture: null,
      furnitureOptions: [
        { value: null, text: 'Choose Furniture.. ' },
        { value: '1', text: 'Empty' },
        { value: '2', text: 'Partial' },
        { value: '3', text: 'Full' }
      ],
         parking: null,
      parkingOptions: [
        { value: null, text: 'Choose Parking.. ' },
        { value: '1', text: 'None' },
        { value: '2', text: 'LUG' },
        { value: '3', text: 'Covered' },
        { value: '4', text: 'Street' }
      ],
         gender: null,
      genderOptions: [
        { value: null, text: 'Choose Gender Preference.. ' },
        { value: '1', text: 'Male' },
        { value: '2', text: 'Female' },
        { value: '3', text: 'No Preference' },
      ],
         petFriendly: null,
      
      },
      secondForm:{
        title:"",
        description:"",
        free:false,
        price:"",
        images:""
      }
    }
  },mounted(){

     this.autocomplete = new this.$google.maps.places.Autocomplete(this.$refs.locationReference.$el,
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
  this.lat=lat;
  this.long=lon;
});
   
    
  },
  methods:{
    inArray(needle, haystack) {
                    var length = haystack.length;
                    for(var i = 0; i < length; i++) {
                        if(haystack[i] == needle) return true;
                    }
                    return false;
                },
    handleFileUpload($e){
        let files=$e.target.files;
        let _this=this;
        Object.keys(files).forEach(function(key) {
 _this.secondForm.images.push(files[key]) 
  

});
},

    backClicked(){
      this.notNext=true;
    },
    handleFileUpload(e){
     },
    currentLocation(){
     console.log( this.$google.maps.places)
    },
    next(){
      this.showAlert=false;
      let obj=this.firstForm;
      let error= "";
for(let val in this.firstForm){

    if((this.firstForm[val]==null || this.firstForm[val]=="" ) && !this.inArray(val,this.optional)){
      if(val=="lat" || val=="long"){
        val="location";
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
        params.set("userId",this.$store.state.userInfo.userId);
        params.set("address",this.firstForm.location);
        params.set("latitude",this.firstForm.lat);
        params.set("longitude",this.firstForm.long);

        params.set("bedroom",this.firstForm.selectedBedRooms);
        params.set("bathroom",this.firstForm.selectedBathRooms);
        params.set("gender",this.firstForm.gender);
        params.set("parking",this.firstForm.parking);
        params.set("pet",this.firstForm.petFriendly==0?"":this.firstForm.petFriendly);
        params.set("furniture",this.firstForm.furniture);

        
        params.set("title",this.secondForm.title);
        params.set("description",this.secondForm.description);
        params.set("price",!this.secondForm.free?this.secondForm.price:0);
        params.set("free",this.secondForm.free);
        
let ins=this.secondForm.images.length;
for (var x = 0; x < ins; x++) {
    params.append("image_"+(x+1), this.secondForm.images[x]);
}
const config = { headers: { 'Content-Type': 'multipart/form-data' } };
          axios.post(process.env.baseUrl+"/accommodation",params,config)
           .then((response) => {
               if(response.data.status==200){
                 
                 this.$store.state.message="Accommodation Have been added Successfully !";
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