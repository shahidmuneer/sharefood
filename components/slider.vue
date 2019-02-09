<template>
  <div >

<section class="hero-area bg-1 text-center overly">
	<!-- Container Start -->
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<!-- Header Contetnt -->
				<div class="content-block">
					<h1 style="font-size:45px;">Buy & Sell Near You </h1>
					<p>
						FATSHARES is an innovative application that aims to help people share the most important elements of our daily life and seek help.
					</p>
					<div class="short-popular-category-list text-center">
						<h2>Categories</h2>
						<ul class="list-inline">
							<li class="list-inline-item">
								<a href=""><i class="fa fa-cutlery"></i> Food</a></li>
							<li class="list-inline-item">
								<a href=""><i class="fa fa-grav"></i> Acomd </a>
							</li>
							<li class="list-inline-item">
								<a href=""><i class="fa fa-car"></i> Transport</a>
							</li>
							
						</ul>
					</div>
					
				</div>
				<!-- Advance Search -->
				<ul class="nav nav-tabs advance-search-nav"  id="advanceSearchNav" role="tablist">
  <li class="nav-item"  >
    <a class="nav-link " v-bind:class="{active:components,'bg-primary text-white':!components}" data-toggle="tab" @click="components=true" href="#home" role="tab" aria-controls="home">SEEK</a>
  </li>
  <li class="nav-item ">
    <a class="nav-link" v-bind:class="{active:!components,'bg-primary text-white':components}"  data-toggle="tab" @click="components=false" href="#profile" role="tab" aria-controls="profile">OFFER</a>
  </li>
</ul>
				<div class="advance-search tab-content" >
	<div class="tab1" v-if="components">
					<form action="#">
						<div class="row">

							<!-- Store Search -->
							<div class="col-lg-3 col-md-12">
								<div class="block d-flex">
									<input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" id="search" placeholder="Search for store">
								</div>
							</div>
							<div class="col-lg-3 col-md-12">
								<div class="block d-flex">
									<input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" id="search" placeholder="Search for store">
								</div>
							</div>
							<div class="col-lg-6 col-md-12">
								<div class="block d-flex">
									<input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" id="search" placeholder="Search for store">
									<!-- Search Button -->
									<button class="btn btn-main">SEEK</button>
								</div>
							</div>
						</div>
					</form>
					
				</div>
				<div class="tab1" v-if="!components">
					<form action="#">
						<div class="row">

							<!-- Store Search -->
							<div class="col-lg-3 col-md-12">
								<div class="block d-flex">
									<input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" id="search" placeholder="Search for store">
								</div>
							</div>
							<div class="col-lg-3 col-md-12">
								<div class="block d-flex">
									<input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" id="search" placeholder="Search for store">
								</div>
							</div>
							<div class="col-lg-6 col-md-12">
								<div class="block d-flex">
									<input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" id="search" placeholder="Search for store">
									<!-- Search Button -->
									<button class="btn btn-main">OFFER</button>
								</div>
							</div>
						</div>
					</form>
					
				</div>
				</div>
			</div>
		</div>
	</div>

	
	<!-- Container End -->
</section>

  </div>
</template>
<script>
export default{
	data:function(){
		return {
			components:true,
			
		};
	}
	
}

</script>
<style>
.short-popular-category-list ul li a{
	background:white;
	color:black;
}
.advance-search-nav .nav-link{
padding:15px 42px;
}

</style>