// $(function() {

//Настраиваем instafeed
//     var feed = new Instafeed({
//         clientId: 'ab799130ab0f41baa714a5523b720689',
//         target: 'instafeed',
//         get: 'tagged',
//         tagName: 'sergeyifoto',
//         links: true,
//         limit: 8,
//         sortBy: 'most-recent',
//         resolution: 'standard_resolution',
//         template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'
//     });
//     feed.run();

// });

 // var feed = new Instafeed({
 // 		target:'instafeed',
 //        get: 'tagged',
 //        tagName: 'sergey_ilyin_photo',
 //        userId: '283213643',
 //        accessToken:'283213643.ab79913.ce020b64710d488ebd874156cb782550' 
 //    });
 //    feed.run();


  $(document).ready(function(){
     $("body").on('click', 'a.scrollable', function(e){
 	 var fixed_offset = 70;
  	$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset}, 1000);
  	e.preventDefault();
});
     $('.callme').height($('.contacts_list').height());
     $('body').scrollspy({target: "#navbar", offset: 100});  

var tok = '283213643.ab79913.ce020b64710d488ebd874156cb782550', // я уже давал ссылку чуть выше
    userid = 283213643, // ID пользователя, можно выкопать в исходном HTML, можно использовать спец. сервисы либо просто смотрите следующий пример :)
    kolichestvo = 6; // ну это понятно - сколько фоток хотим вывести
 
$.ajax({
	url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent',
	dataType: 'jsonp',
	type: 'GET',
	data: {access_token: tok, count: kolichestvo}, // передаем параметры, которые мы указывали выше
	success: function(result){
 		console.log(result);
		for( x in result.data ){
			$('#instafeed').append('<a href="'+result.data[x].link+'"" class="col-12 col-md-12 col-lg-4 col-xl-4 mb-5" target="_blank"><img class="img-fluid img-thumbnail rounded mx-auto d-block" src="'+result.data[x].images.standard_resolution.url+'"></a>'); // result.data[x].images.low_resolution.url - это URL картинки среднего разрешения, 306х306
			// result.data[x].images.thumbnail.url - URL картинки 150х150
			// result.data[x].images.standard_resolution.url - URL картинки 612х612
			// result.data[x].link - URL страницы данного поста в Инстаграм 
		}
	},
	error: function(result){
		console.log(result); // пишем в консоль об ошибках
	}
});
     
});

