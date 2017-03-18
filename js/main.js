<script>
			$(document).ready(function() {
				$(".btn-pref .btn").click(function () {
				$(".btn-pref .btn").removeClass("btn-danger").addClass("btn-default");
				$(this).removeClass("btn-default").addClass("btn-danger");   
				
				});
			});


			<script type="text/javascript">

   var abc="Recent";
   var page=0;
   dataload();
  $( ".toggle" ).click(function() {
     
  abc= $(this).find(':last-child').text(); 
 dataload();
 
});
   $( ".tabs" ).click(function() {
     
  page= $(this).text(); 
  console.log(page);
 dataload();
 
});

  function dataload () {
  	// body...
  
	    $.ajax({
  method: "GET",
  url: 'http://acadprojects.com/py/explora/question?page=0&type='+abc,
 
})
  .done(function( msg ) {
  	var infoHTML='';

  	
  	$.each(msg.data, function(index, value) { 
       infoHTML+='<div class="row">';
 	   infoHTML+='<div class="col-md-2 col-md-offset-1" class="user">';       
 	   infoHTML+='<figure class="centre">';
       infoHTML+='<img  src="assets/img/user1.png" class="img-responsive" id="img-circle"></figure>' ;    
	   infoHTML+='<h4 class="center">' + value.posted_by_email + '</h4>'; 
	   infoHTML+='<h4 class="center">' + value.posted_by_name + '</h4>'; 
	   infoHTML+='</div>';
	   infoHTML+='<div class="col-md-9">';
	   infoHTML+='<h3 class="justify">'+ value.question + '</h3>';
	   infoHTML+='<a href="answers.html?'+jQuery.param(msg.data[index])+'">View answers</a>';
	   infoHTML+='</div>';
	   infoHTML+='</div>';
	   console.log(msg.data[index]);
	});
	console.log(abc);
   if (abc=="Recent") {
  	$("#tab1").html(infoHTML);
  		 }
    else if (abc=="Trending") {
  	$("#tab2").html(infoHTML);
  		 }
  	 else  {
  	$("#tab3").html(infoHTML);
  		 }	 	 
  });


  }


  
     
   
  </script>
 

  <script type="text/javascript">

  $("#semester-dropdown").on('change', function() {
 var sem=this.value;

var data = JSON.stringify({
  "page": 0,
  "filters": [
    {
      "name": "semester",
      "value": sem
    },
    {
      "name": "tags",
      "value": "docker,python"
    }
  ]
});


console.log(data);
 $.ajax({
  method: "POST",
  url: "http://acadprojects.com/py/explora/filter",
  data:data,
    contentType: "application/json; charset=UTF-8"
  
	})
  .done(function( msg ) {
      var infoHTML='';
   	$.each(msg.data, function(index, value) { 
      infoHTML+='<div class="row">';
 	   infoHTML+='<div class="col-md-2 col-md-offset-1" class="user">';       
 	   infoHTML+='<figure class="centre">';
       infoHTML+='<img  src="assets/img/user1.png" class="img-responsive" id="img-circle"></figure>' ;    
	   infoHTML+='<h4 class="center">' + value.posted_by_email + '</h4>'; 
	   infoHTML+='<h4 class="center">' + value.posted_by_name + '</h4>'; 
	   infoHTML+='</div>';
	   infoHTML+='<div class="col-md-9">';
	   infoHTML+='<h3 class="justify">'+ value.question + '</h3>';
	   infoHTML+='<a href="file:///C:/Users/ankit/Downloads/Quora1/Quora/answers.html?'+jQuery.param(msg.data[index])+'">View answers</a>';
	   infoHTML+='</div>';
	   infoHTML+='</div>';
  });
   	$(".tab-pane ,.fade, .in, .active").html(infoHTML);
});
});

$( "#butn" ).click(function( event ) {
  event.preventDefault();
    var email=$("#email").val();
    var name=$("#name").val();
    var question=$("#question").val();
    var subject=$("#subject").val();
    var semester=$("#semester").val();
    var data = JSON.stringify({
    
	"posted_by_email":email,
	"posted_by_name":name,
	"question":question,
	"subject_id":subject,
	"semester":semester
	

});
   $.ajax({
  method: "POST",
  url: "http://acadprojects.com/py/explora/question",
  data:data,
    contentType: "application/json; charset=UTF-8"
  
	})
  .done(function( msg ) {
    console.log(msg);
  });
 
});

$( "#search" ).click(function( event ) {
  event.preventDefault();
  var ask=$("#ask").val();
  if (ask=="python") {
  	subject=2;
  }
  else if (ask=="java") {
  	subject=1;
  }
  else if (ask=="javascript") {
  	subject=3;
  }
  else {
  	$(".tab-pane ,.fade, .in, .active").html("no data found");
  	return false;
  }
    var data = JSON.stringify({
    
	
	"page":page,
	"filters":[
		{
			"name":"subject_id",
			"value":subject
		}
		
	]

	

});
    $.ajax({
  method: "POST",
  url: "http://acadprojects.com/py/explora/filter",
  data:data,
    contentType: "application/json; charset=UTF-8"
  
	})
  .done(function( msg ) {
       var infoHTML='';
   	$.each(msg.data, function(index, value) { 
      infoHTML+='<div class="row">';
 	   infoHTML+='<div class="col-md-2 col-md-offset-1" class="user">';       
 	   infoHTML+='<figure class="centre">';
       infoHTML+='<img  src="assets/img/user1.png" class="img-responsive" id="img-circle"></figure>' ;    
	   infoHTML+='<h4 class="center">' + value.posted_by_email + '</h4>'; 
	   infoHTML+='<h4 class="center">' + value.posted_by_name + '</h4>'; 
	   infoHTML+='</div>';
	   infoHTML+='<div class="col-md-9">';
	   infoHTML+='<h3 class="justify">'+ value.question + '</h3>';
	   infoHTML+='<a href="file:///C:/Users/ankit/Downloads/Quora1/Quora/answers.html?'+jQuery.param(msg.data[index])+'">View answers</a>';
	   infoHTML+='</div>';
	   infoHTML+='</div>';
	   console.log(msg.data);
  });
   	$(".tab-pane ,.fade, .in, .active").html(infoHTML);
  });
 
	

});
		</script>