<template>
        <div class="container register" style="margin-top:20px; margin-bottom:20px">

        
<div class="card bg-light">
<article class="card-body mx-auto" style="max-width: 400px; margin-top:20px;">
	<h4 class="card-title mt-3 text-center">Login</h4>
	
	<p class="divider-text">
       
    </p>
	<form>
	
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
		 </div>
        <input name="" class="form-control" placeholder="Email address" type="email">
    </div> <!-- form-group// -->
    
    
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
		</div>
        <input class="form-control" placeholder="Create password" type="password">
    </div> <!-- form-group// -->
                                       
    <div class="form-group">
        <button type="submit" class="btn btn-primary btn-block"> Login  </button>
    </div> <!-- form-group// -->      
    <p class="text-center"> Don't have an account? <a href="/register">Sign Up</a> </p>                                                                 
</form>

    <p class="text-center">  By tapping "Login" you are agree to our<a href="/privacy"> T&C</a> and our <a href="/privacy">Privacy Policy.</a> </p>   
</article>
</div> <!-- card.// -->   
        </div>
            </template>
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
            </style>