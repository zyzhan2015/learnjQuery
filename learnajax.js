// $(() => {
// 	$("#send").click(() => {
// 		$("#resText").load("test.html", function (responseText, textStatus, XMLHttpRequest) {
// 			console.log("显示完毕！")
// 		});
// 	});
// });

// $(() => {
// 	$("#send").click(() => {
// 		$("#resText").get("get3.php", {
// 			username: $("#username").val(),
// 			content:  $("#content").val()
// 		}, function (data, textStatus) {
// 			let username = data.username;
// 			let content  = data.content;
// 			let txtHtml  = `<div class="comment">
// 						      <h6>${username}</h6>
// 						      <p class="para">${content}</p>
// 						    </div>`;
// 			$("#resText").html(txtHtml);
// 		}, "json");
// 	});
// });

// $(() => {
// 	$.getScript("jquery.color-2.1.2.js", () => {
// 		$("#go").click(() => {
// 			$(".block").animate( { backgroundColor: 'pink' }, 1000)
// 					   .animate( { backgroundColor: 'blue' }, 1000);
// 		});
// 	});
// });

// $(() => {
// 	$('#send').click(() => {
// 		$.getJSON('test.json', data => {
// 			$('#resText').empty();
// 			let html = '';
// 			$.each(data, function (commentIndex, comment) {
// 				html += `<div class="comment">
// 						<h6>${comment['username']}</h6>
// 						<p class="para">${comment['content']}</p>
// 						</div>`;
// 			});
// 			$('#resText').html(html);
// 		});		
// 	});
// });

$(() => {
	$('#send').click(() => {
		$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?tags=car&tagmode=any&format=json&jsoncallback=?",
			data => {
				$.each(data.items, function (i, item) {
					$('<img class="para">').attr('src', item.media.m)
										   .appendTo('#resText');
					if (i===3) {
						return false;
					}
				});
			});
	});
});