<template>
<div >
<div v-if="data.show" class="alert " v-bind:class="data.type" role="alert">
  <strong>{{data.type}}</strong> {{data.message}}
</div>
</div>
</template>
<script>
export default{
    data:function(){
        props:["type","message","show"]
        return {
            data:{
                type:"success",
                message:"",
                show:false
            }
            

        }
    },
    methods:{
       

    }
}

</script>