	<template>
    <div class="col-md-10 offset-md-1 col-lg-4 offset-lg-0">
          <div v-if="alert.show" class="alert " v-bind:class="'alert-'+alert.type"  role="alert">
  <strong>{{alert.type}}</strong> {{alert.message}}
</div>


				<div class="sidebar">
					<!-- User Widget -->
					<div class="widget user-dashboard-profile">
						<!-- User Image -->
						<div class="profile-thumb">
							<img :src="this.data.profile" 
                             @error="imageLoadError"
                            alt="" class="rounded-circle">
						</div>
						<!-- User Name -->
						<h5 class="text-center" style="overflow-wrap: break-word;">{{data.name}}</h5>
						<p>{{data.email}}</p>
						<a href="user-profile.html" class="btn btn-main-sm">Edit Profile</a>
					</div>
					<!-- Dashboard Links -->
					<div class="widget user-dashboard-menu">
						<ul>
							<!-- <li v-for="(item,id) in navItems" :key="id"
                        
                             v-bind:class="{active:item.active}" ><a  href="#" @click="route(item.url)" >
                                <i class="fa " v-bind:class="item.icon"></i> 
                                {{item.title}}</a> -->
                                <li v-for="(item,id) in navItems" :key="id"
                                v-bind:class="{active:$route.name == item.url}"
                                >
                             <nuxt-link  :to="'/'+item.url" >
                                <i class="fa " v-bind:class="item.icon"></i> 
                                {{item.title}}  </nuxt-link>
                             </li>
							<li><a href="" @click="logout">
                                <i class="fa fa-sign-out"></i> Logout</a></li>
						</ul>
					</div>
				</div>
			</div>
            </template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default{
    data(){
        return {
            alert:{type:"success",show:false,message:"This is message"},
            data:{
               
            name:"",
            email:"",
            profile:""
            },
            navItems:[
                {title:"Dashboard",url:"dashboard",icon:"fa-hand-o-right",active:true},
               {title:"Offering",url:"offer",icon:"fa-hand-o-right",active:true},
                {title:"Seeking",url:"seek",icon:"fa-search",active:false},
                
            ]
        }
    },
    mounted(){
this.data=this.$store.state.userInfo;
    },
    created(){
		if(this.$store.state.message!=""){
            this.alert.type="success";
            this.alert.message=this.$store.state.message;
            this.alert.show=true;
            this.$store.state.message="";
        }
	},
    methods:{
        imageLoadError(){
            this.data.profile="~/assets/images/user/avtar.png";
        },
        logout(){
 Cookie.remove('auth')
	  this.$store.commit('setAuth', null);
	     this.$router.push('/login')
        },
        route(url){
        this.$router.push(url);   
        }
    }
}
</script>