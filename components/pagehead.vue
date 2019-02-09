<template>
  <div  class="VueToNuxtheader">
  
<section style="background:#232425;">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<nav class="navbar navbar-expand-lg  navigation">
					<a class="navbar-brand" href="index.html">
						<img src="~/assets/images/logo.png" alt="" id="mainLogo" >
					</a>
					<button class="navbar-toggler"
					style="background:black;"
					 type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="fa fa-bars" style="color:white;"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav ml-auto main-nav ">
							<li class="nav-item ">
								<nuxt-link class="nav-link"  to="/">Home</nuxt-link>
								
							</li>
							<li class="nav-item">
								<nuxt-link class="nav-link"  v-if="$store.state.auth"   to="/dashboard">Dashboard</nuxt-link>
								
							</li>
							<li class="nav-item">
								<nuxt-link class="nav-link" 
								   to="/about">About</nuxt-link>
								
							</li>
							<li class="nav-item">
								<nuxt-link class="nav-link" 
								   to="/contact">Contact Us</nuxt-link>
								
							</li>
						</ul>
						<ul class="navbar-nav ml-auto mt-10">
							<li class="nav-item">
							<a class="nav-link add-button" v-if="$store.state.auth" href="#" style="background:emerland;" @click="logout"><i class="fa fa-sign-out "></i> Logout</a>
							<nuxt-link class="nav-link add-button" v-if="!$store.state.auth"  style="background:emerland;"   to="/login"><i class="fa fa-user"></i> Login</nuxt-link>
							</li>
							<li class="nav-item">
								<a class="nav-link add-button" style="background:orange;" href="#"><i class="fa fa-plus-circle"></i> OFFER</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	</div>
</section>

  </div>
</template>

<script>

const Cookie = process.client ? require('js-cookie') : undefined
export default{
	methods:{
		logout(){
 Cookie.remove('auth')
	  this.$store.commit('setAuth', null,"")
	     this.$router.push('/login')
		}
	}
}
</script>
<style>
.main-nav .nav-link{
	color:white;
}
.main-nav .nav-item.active .nav-link{
	color:#020204!important;
}
#mainLogo{
	height:40px;
}
@media (max-width: 480px) {
  #mainLogo{
	  height:30px;
  }
}

</style>