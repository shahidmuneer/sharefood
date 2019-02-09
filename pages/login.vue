<template>
        <div class="container register" style="margin-top:20px; margin-bottom:20px">

        
<div class="card " style="background:none;">
<article class="card-body mx-auto" style="background:none;max-width: 400px; margin-top:20px;">
	<h4 class="card-title mt-3 text-center">Login</h4>
	<p class="divider-text">
       <div v-if="alert.show" class="alert " v-bind:class="'alert-'+alert.type"  role="alert">
  <strong>{{alert.type}}</strong> {{alert.message}}
</div>

    </p>
	<form @submit.prevent="loginUser" ref="formContainer">
	
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
		 </div>
        <input name="email" v-model="data.email" class="form-control" placeholder="Email address" type="email">
    </div> <!-- form-group// -->
    
    
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
		</div>
        <input class="form-control"  v-model="data.password" name='password' placeholder="Password" type="password">
    </div> <!-- form-group// -->
                                
              <div class="form-group input-group">
    	<label>
        
        <input v-model="data.conditions"  type="checkbox"> 
		Remember Me
    	</label>
    </div> <!-- form-group// -->
                   
    <div class="form-group">
        <button type="submit" class="btn btn-dark btn-block"> Login  </button>
    </div> <!-- form-group// -->      
    <p class="text-center"> Don't have an account? <nuxt-link   to="/register">Sign Up</nuxt-link> </p>                                                                 
</form>

    <p class="text-center" >  By tapping "Login" you are agree <br>to our<a href="/privacy"> T&C</a> and our <a href="/privacy">Privacy Policy.</a> </p>   
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
    data:{email:"",password:"",conditions:false},
    alert:{type:"success",show:false,message:"This is message"},
    fullPage:false
}
    },
    created(){

        if(this.$store.state.message!=""){
            this.alert.type="success";
            this.alert.message=this.$store.state.message;
            this.alert.show=true;
        }
    },
 computed: {
    

  },
  methods: {
      
      onCancel(){

      },
    loginUser () {
        this.alert.show=false;
      
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
        let loader=this.$root.$loading.start();
        let params=new FormData();
        params.set("email",this.data.email);
        params.set("password",this.data.password);
         return axios.post(process.env.baseUrl+"/login",params)
           .then((response) => {
           
               if(response.data.status==200){
               const auth={accessToken:response.data.result.device_token,result:response.data.result};
         this.$store.commit('setAuth', auth) // mutating to store for client rendering
        Cookie.set('auth', auth) // saving token in cookie for server rendering
        
        this.$router.push('/dashboard/')
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