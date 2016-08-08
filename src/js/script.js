 $(function() {

 	if (  $(window).innerWidth()<768){
		toggleMenu()
		};


	$('.accord').on('hidden.bs.collapse', toggleChevron);
	$('.accord').on('shown.bs.collapse', toggleChevron);

	$( "a[href ='#']" ).click(function( event ) {
		  event.preventDefault();
		});
	
	$('.btn-radio').click(function(e) {
		$('.btn-radio').not(this).removeClass('active')
		.siblings('input').prop('checked',false);
		$(this).addClass('active')
		.siblings('input').prop('checked',true);
	});


 })

function toggleChevron(e) {
    $(e.target)
        .prev('.panel-heading')
        .find("i.accord__ind")
        .toggleClass('fa-chevron-down fa-chevron-up');
}

function contactMap(){
	
	var mymap = L.map('mapid').setView( [53.61, 10.001356], 10 );

	var greenIcon = L.icon({
	    iconUrl: "../image/mapIcon.png",
	   
	    iconSize:     [22, 33], // size of the icon
	    
	});

	L.marker([53.676012, 10.001356], {icon: greenIcon}).addTo(mymap);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	    
	    maxZoom: 18,
	    id: 'kosty79.10hib9ca',
	    accessToken: 'pk.eyJ1Ijoia29zdHk3OSIsImEiOiJjaXJibXdiYm4wMDVhaWxsdzFvdG0yYWk0In0.xVVsKeKHcP72EYKT2jj6xQ'
	}).addTo(mymap);

	$("div.leaflet-control-attribution").children("a").hide()
}

function toggleMenu(){
	var $menuLink = $("#menuLink");
 	var $menuContent = $("#menuContent");
 	var $closeMenu = $("#closeMenu");

	$($menuLink).on("click", function(){
		$($menuContent).toggle()
	});
	$($closeMenu).on("click", function(){
		$($menuContent).hide()
	});
}

