<template>
        <div class="container register" style="margin-top:20px; margin-bottom:20px;">

        
<div class="card " style="background:none;">
<article class="card-body mx-auto" style="background:none;max-width: 400px; margin-top:20px; background:none;">

	<h4 class="card-title mt-3 text-center">Create Account</h4>
	
	<p class="divider-text">
       <div v-if="alert.show" class="alert " v-bind:class="'alert-'+alert.type"  role="alert">
  <strong>{{alert.type}}</strong> {{alert.message}}
</div>
    </p>
    
	<form @submit.prevent="register">
	<div class="form-group input-group">
		<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-user"></i> </span>
		 </div>
        <input name="name" v-model="data.name" class="form-control" placeholder="Name" type="text">
    </div> <!-- form-group// -->
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
		 </div>
        <input name="email" v-model="data.email"  class="form-control" placeholder="Email address" type="email">
    </div> <!-- form-group// -->
    
    
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
		</div>
        <input v-model="data.password"  class="form-control" placeholder="Create password" type="password">
    </div> <!-- form-group// -->

              <div class="form-group input-group">
    	<label>
        
        <input v-model="data.conditions"  type="checkbox"> 
		I accept all terms and conditions
    	</label>
    </div> <!-- form-group// -->
                                       
    <div class="form-group">
        <button type="submit" class="btn btn-dark btn-block"> Signup  </button>
    </div> <!-- form-group// -->      
    <p class="text-center" >Already have an account? <nuxt-link   to="/login">Log in</nuxt-link>  </p>                                                                 
</form>
</article>
</div> <!-- card.// -->   
        </div>
            </template>
           
<script>
import axios from "axios";
const Cookie = process.client ? require('js-cookie') : undefined
export default{
    middleware: 'notAuthenticated',
   
    data:function(){
return {
    data:{email:"",password:"",name:"",conditions:false},
    alert:{type:"success",show:false,message:"This is message"},
    fullPage:false
}
    },
 computed: {
    

  },
  methods: {
      onCancel(){

      },
    register () {
        this.alert.show=false;
        if(this.data.name==""){
            this.alert.type="warning";
            this.alert.message="Name cannot empty !";
            this.alert.show=true;
            return;
        }
        if(this.data.email==""){
            this.alert.type="warning";
            this.alert.message="Email cannot empty !";
            this.alert.show=true;
            return;
        }
        if(this.data.password==""){
            this.alert.type="warning";
            this.alert.message="Password cannot empty !";
            this.alert.show=true;
            return;
        }
        if(this.data.conditions==false){
            this.alert.type="warning";
            this.alert.message="You need to accept Terms and conditions !";
            this.alert.show=true;
            return;
        }
        
        let loader=this.$root.$loading.start();
        let params=new FormData();
        params.set("name",this.data.name);
        params.set("email",this.data.email);
        params.set("password",this.data.password);
         return axios.post(process.env.baseUrl+"/users",params)
           .then((response) => {
               
               if(response.data.status==200 || response.data.status==201){
                    this.$store.commit('setMessage', "User Created Successfully Kindly login");
        this.$router.push('/login')
        // redirect('/login')
               }else{
                     this.alert.type="warning";
            this.alert.message=response.data.message;
            this.alert.show=true;
            
               }
        })
        .catch(error => {
            console.log(error)
            
            // his.errored = true
          })
          .finally(() => loader.hide());
      
 
    
    },
  
  }
}
</script>

            <style>
           .divider-text {
    position: relative;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 15px;
}
.divider-text span {
    padding: 7px;
    font-size: 12px;
    position: relative;   
    z-index: 2;
}
.divider-text:after {
    content: "";
    position: absolute;
    width: 100%;
    border-bottom: 1px solid #ddd;
    top: 55%;
    left: 0;
    z-index: 1;
}

.btn-facebook {
    background-color: #405D9D;
    color: #fff;
}
.btn-twitter {
    background-color: #42AEEC;
    color: #fff;
}
body{
    background:url("../assets/images/home/hero.png");
    background-size:contain;
}

.card p,.card label{
    color:black!important;
}
            </style>