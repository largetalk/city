$(document).ready(function(){
	$("#menu-item-admin").click(function(){
		$(".sub-menu").hide();
		$("#sub-menu-admin").show();
	});
	
	$("#menu-item-functions").click(function(){
		$(".sub-menu").hide();
		$("#sub-menu-functions").show();
	});
	
	$("#menu-item-projects").click(function(){
		$(".sub-menu").hide();
		$("#sub-menu-projects").show();
	});
	
	$("#menu-item-building").click(function(){
		$(".sub-menu").hide();
		$("#sub-menu-building").show();
	});
	
	$("#menu-item-internalview").click(function(){
		$(".sub-menu").hide();
		$("#sub-menu-internalview").show();
	});
	
	$("#menu-item-builddetail").click(function(){
		$(".sub-menu").hide();
		$("#sub-menu-builddetail").show();
	});
	
	$("#menu-item-total").click(function(){
		$(".sub-menu").hide();
		$("#sub-menu-total").show();
	});
	
	$("#menu-item-material").click(function(){
		$(".sub-menu").hide();
		$("#sub-menu-material").show();
	});
	
	$("#menu-item-knowledge").click(function(){
		$(".sub-menu").hide();
		$("#sub-menu-knowledge").show();
	});
	
	$("#G06").click(function(){
		$.ajax({
			type: "post",
			url: "category.json",
			data: {category_id: $(this).attr("id")},
			dataType: "json",
			success: function(data) {
				var range_label = data.rangeLabelLst;
				$(range_label).each(function(index){
					if (range_label[index].tagLst.length == 0) {
						var inputs = "<div class='search-keyword col-sm-12'><div class='col-sm-2 " +
							"keyword-label'><span>" + range_label[index].name.split("-")[1] +
							":</span></div><div class='col-sm-10 kewords'><input class='keyword-input pull-left' id='" +
							range_label[index].name.split("-")[0] + "' type='text' /></div></div>";
						$(inputs).insertAfter($("#search-keyword"));
					} else if (range_label[index].tagLst.length > 0) {
						var inputs = "<div class='search-keyword col-sm-12'><div class='col-sm-2 " +
							"keyword-label'><span>" + range_label[index].name.split("-")[1] +
							":</span></div><div class='col-sm-10 kewords'>";
						var tags = range_label[index].tagLst;

						$(tags).each(function(idx){
							inputs = inputs + "<span><a href='#' class='keyword' id='" +
							          tags[idx].name.split("-")[0] +
							          "'>" + tags[idx].sname + "</a></span>&nbsp;&nbsp;&nbsp;&nbsp;";
						});
						
						inputs = inputs + "</div></div>";
						$(inputs).insertAfter($("#search-keyword"));
					}
				});
			},
			error: function() {
				alert("fail");
			}
		});
	});
	
	$(".keyword").click(function(){
	  var search_item = $(this).attr("id");
	  alert(search_item);
	});
});

