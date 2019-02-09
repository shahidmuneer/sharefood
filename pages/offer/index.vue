<template>
  <div >
<section class="dashboard section">
	<!-- Container Start -->
	<div class="container">
		<!-- Row Start -->
		<div class="row">
		<sidebar/>
			<div class="col-md-10 offset-md-1 col-lg-8 offset-lg-0">
				<!-- Recently Favorited -->
				<div class="widget dashboard-container my-adslist">
					<h3 class="widget-header">Offering</h3>
					<div>
    <label for="inputFormatter">Offering</label>
	 <div>
    <b-form-select @change.native="changed($event)" v-model="selected" :options="options" class="mb-3" />
    <!-- <div>Selected: <strong>{{ selected }}</strong></div> -->
  </div>

<transport v-if="selected=='transport'"/>
<food v-if="selected=='food'"/>
<accom  v-if="selected=='accom'"/>
			</div>
		</div>
		<!-- Row End -->
	</div>
	<!-- Container End -->
	</div>
	</div>
</section>
  </div>
</template>


<script>

import sidebar from "~/components/dashboard/sidebar";
import transport from "~/components/dashboard/offer/transport";
import accom from "~/components/dashboard/offer/accom";
import food from "~/components/dashboard/offer/food";


export default {
	components:{sidebar,transport,accom,food},
    middleware: 'authenticated',
data () {
    return {
      text1: '',
	  text2: '',
	  selected: null,
      options: [
        { value: null, text: 'Please Select what you are offering ' },
        { value: 'food', text: 'Food' },
        { value: 'accom', text: 'Accomodation' },
        { value: 'transport', text: 'Transport'}
      ]
    }
  },
  methods: {
    format (value, event) {
      return value.toLowerCase()
	},
	changed($event){
		// console.log($event.target.value)
	}
  }
}
</script>

<style>
.dashboard{
	min-height:400px!important;
}
</style>
