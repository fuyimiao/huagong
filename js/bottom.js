$(function(){
	$("#btn").click(function(){
		var name=$("#name input").val();
		var mail=$("#mail input").val();
		var pho=$("#pho input").val();
		//console.log(name,mail,pho);
		var x=1,y=1;
		if(name.length<=0){
			$("#noname").css("display","block");
			x=0;
		}else{
			$("#noname").css("display","none");
			x=1;
		}
		if(mail.length<=0){
			$("#nomail").css("display","block");
			y=0;
		}
		else{
			
			$("#nomail").css("display","none");
			if(!(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/).test(mail)){
				$("#errmail").show();
				y=0;
			}
			else{
				$("#errmail").hide();
				y=1;
			}
		}
		if(x+y==2){
			$("#sus").show();
			setTimeout(function(){
				$("#sus").hide();
			},2000)
		}else{
			$("#sus").hide();
		}
	})
})
