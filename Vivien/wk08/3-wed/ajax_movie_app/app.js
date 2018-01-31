console.log('banana phone')

var options={
	url: "http://www.omdbapi.com/?apikey=2f6435d9&s=",
	method:'get'
}
$(".search").on('click',function(){
	var value=$("input").val()
	$('.container').empty()
	

	options.url = "http://www.omdbapi.com/?apikey=2f6435d9&s=" + value

	$.ajax(options).done(function(response){
		response.Search.forEach(function(movie){
		var $container=$('<div>')
		var button=$('<button>').text(0).addClass("sum")
		var $like=$('<button class="like">').text("Like")
		var a=$("<a>").attr("href", "http://www.omdbapi.com/?apikey=2f6435d9&t=" + movie.Title).text(movie.Title)
		var p=$('<p>').text("Year released:"+movie.Year)
		var img=$('<img>').attr('src', movie.Poster)
	     $container.append(a)
	     $container.append(button)
	 	 $container.append($like)
	     $container.append(p)
	     $container.append(img)
	    $('.container').append($container)

	    $like.on("click",function(){
			$(this).toggleClass("color")
			var div=$(this).closest('div')
			var sum=div.find(".sum").text()
			// sum = 0
			if ($(this).hasClass('color')){
				sum=Number(sum)+1
		    } else {
		    	sum=Number(sum)-1
		    }
		    div.find('.sum').text(sum)
		})
	 	})
	})
})
