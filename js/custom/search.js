$(document).ready(function(){
  $(".sub-menu").hide();
	$("#sub-menu-admin").show();
	
	$("#menu-item-admin").mouseover(function(){
	  $("#active-main").removeAttr("class");
		$(".sub-menu").hide();
		$("#sub-menu-admin").show();
	});
	
	$("#menu-item-functions").mouseover(function(){
	  $("#active-main").removeAttr("class");
		$(".sub-menu").hide();
		$("#sub-menu-functions").show();
	});
	
	$("#menu-item-projects").mouseover(function(){
	  $("#active-main").removeAttr("class");
		$(".sub-menu").hide();
		$("#sub-menu-projects").show();
	});
	
	$("#menu-item-building").mouseover(function(){
	  $("#active-main").removeAttr("class");
		$(".sub-menu").hide();
		$("#sub-menu-building").show();
	});
	
	$("#menu-item-internalview").mouseover(function(){
	  $("#active-main").removeAttr("class");
		$(".sub-menu").hide();
		$("#sub-menu-internalview").show();
	});
	
	$("#menu-item-builddetail").mouseover(function(){
	  $("#active-main").removeAttr("class");
		$(".sub-menu").hide();
		$("#sub-menu-builddetail").show();
	});
	
	$("#menu-item-total").mouseover(function(){
	  $("#active-main").removeAttr("class");
		$(".sub-menu").hide();
		$("#sub-menu-total").show();
	});
	
	$("#menu-item-material").mouseover(function(){
	  $("#active-main").removeAttr("class");
		$(".sub-menu").hide();
		$("#sub-menu-material").show();
	});
	
	$("#menu-item-knowledge").mouseover(function(){
	  $("#active-main").removeAttr("class");
		$(".sub-menu").hide();
		$("#sub-menu-knowledge").show();
	});
	
	$(".sub-menu").mouseover(function(){
	  $("#active-sub").removeAttr("class");
	});
	
	var $container = $('#product-details').masonry({
		//columnWidth: 5,
		gutter: 51,
		//isFitWidth: true,
  		itemSelector: '.items'
	});
	// layout Masonry again after all images have loaded
	$container.imagesLoaded( function() {
  		$container.masonry();
	});
	
	$(".keyword").click(function(){
	  var search_item = $(this).attr("id");
	  var hints = $("#criteria-hints").html();
	  $(this).addClass("criteria-hint");
	  //$(this).css({"background-color": "rgb(0, 84, 168)","color": "#FFFFFF"});
	  
	  $("#criteria-hints").html(hints + "&nbsp;&nbsp;<span class='criteria-hint' id='" +
	    search_item + "'>" + $("#" + search_item).text() +
	    "&nbsp;<a href='#' class='remove-hint'><b>x</b></a>&nbsp;</span>");
	  $("#remove-hints").show();
	});
	
	
	$(".carousel").carousel();
	
	$(".item").colorbox({rel: 'item'});
});


function Map(){
    this.obj = {};
    this.count = 0;
}
Map.prototype.put = function(key, value){
    var oldValue = this.obj[key];
    if(oldValue == undefined){
        this.count++;
    }
    this.obj[key] = value;
    return oldValue;
}
Map.prototype.get = function(key){
    return this.obj[key];
}
Map.prototype.remove = function(key){
    var oldValue = this.obj[key];
    if(oldValue != undefined){
        this.count--;
        delete this.obj[key];
    }
    return oldValue;
}
Map.prototype.size = function(){
    return this.count;
}
function Set(getKey){
    this.map = new Map();
    this.getKey = getKey;
}
Set.prototype.add = function(value){
    var key = this.getKey(value);
    this.map.put(key, value);
}
Set.prototype.remove = function(value){
    var key = this.getKey(value);
    this.map.remove(key);
}
Set.prototype.getAll = function(){
    tempArray=new Array();
    for(var i in this.map.obj){
        tempArray.push(i);
    }
    return tempArray;
}
Set.prototype.size = function(){
    return this.map.size();
}
Set.prototype.removeAll = function(){
    this.map = new Map();
}
