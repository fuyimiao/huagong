$(function(){
	$.ajax({
		type:'get',
		url:'js/aboutus.json',
		dataType:'json',
		success:function(data){
			//console.log("ss");
			$("#content").html(data.content);
		}
	})
})
