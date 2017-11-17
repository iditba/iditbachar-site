(function () {
	var header = document.getElementById("mainHeader");

	function changeHeader() {
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		header.classList.toggle("header-background", scrollTop >= 50 || document.body.classList.contains("nav-open"));
	}

	var didScroll = false;

	$(window).scroll(function () {
		didScroll = true;
	});

	setInterval(function() {
		if (didScroll) {
			didScroll = false;
			changeHeader();
		}
	}, 100);

	changeHeader();

	document.getElementById("open-nav").addEventListener("click", function (event) {
		event.preventDefault();
		document.body.classList.toggle("nav-open");
		changeHeader();
	});

	$("a[href*=\\#]").on("click", function (event) {
		event.preventDefault();

		$("html, body").animate({
			scrollTop: $(this.hash).offset().top
		}, 500);
	});
})();

// slick slider tuch-ups--------------------------------------------

$(document).ready(function(){
	$('.fade').slick({
	  dots: true,
	  infinite: true,
	  speed: 500,
	  fade: true,
		autoplay: true,
	  cssEase: 'linear'
	});
});



// var algoliasearch = require('algoliasearch');
// var algoliasearch = require('algoliasearch/reactnative');
// var algoliasearch = require('algoliasearch/lite');
// or just use algoliasearch if you are using a <script> tag
// if you are using AMD module loader, algoliasearch will not be defined in window,
// but in the AMD modules of the page

var client = algoliasearch("KOUQ0R478A", "4511caa62aa31f253ebbbe5f8f72dd6d");
var index = client.initIndex('idit-site');



// only query string
index.search({ query: 'query string' }, function searchDone(err, content) {
  if (err) {
    console.error(err);
    return;
  }

  for (var h in content.hits) {
    console.log(
      `Hit(${content.hits[h].objectID}): ${content.hits[h].toString()}`
    );
  }
});

// with params
index.search(
  {
    query: 'query string',
    attributesToRetrieve: ['firstname', 'lastname'],
    hitsPerPage: 50,
  },
  function searchDone(err, content) {
    if (err) {
      console.error(err);
      return;
    }

    for (var h in content.hits) {
      console.log(
        'Hit(' + content.hits[h].objectID + '): ' + content.hits[h].toString()
      );
    }
  }
);




// var algoliasearch = require('algoliasearch');
// var algoliasearch = require('algoliasearch/reactnative');
// var algoliasearch = require('algoliasearch/lite');
// or just use algoliasearch if you are using a <script> tag
// if you are using AMD module loader, algoliasearch will not be defined in window,
// but in the AMD modules of the page

// var client = algoliasearch('KOUQ0R478A', '4511caa62aa31f253ebbbe5f8f72dd6d');
// var index = client.initIndex('idit_NAME');



// index.setSettings({
//   searchableAttributes: [
//     'brand',
//     'name',
//     'categories',
//     'unordered(description)',
//   ],
//   customRanking: ['desc(popularity)'],
// });
//
//
// var search = instantsearch({
//   // Replace with your own values
//   appId: 'latency',
//   apiKey: '6be0576ff61c053d5f9a3225e2a90f76', // search only API key, no ADMIN key
//   indexName: 'instant_search',
//   urlSync: true
// });
//
// search.addWidget(
//   instantsearch.widgets.searchBox({
//     container: '#search-input'
//   })
// );
//
// search.addWidget(
//   instantsearch.widgets.hits({
//     container: '#hits',
//     hitsPerPage: 10,
//     templates: {
//       item: document.getElementById('hit-template').innerHTML,
//       empty: "We didn't find any results for the search <em>\"{{query}}\"</em>"
//     }
//   })
// );
//
// search.addWidget(
//   instantsearch.widgets.pagination({
//     container: '#pagination'
//   })
// );
//
// search.start();
//
//
//
//
// // only query string
// index.search({ query: 'query string' }, function searchDone(err, content) {
//   if (err) {
//     console.error(err);
//     return;
//   }
//
//   for (var h in content.hits) {
//     console.log(
//       `Hit(${content.hits[h].objectID}): ${content.hits[h].toString()}`
//     );
//   }
// });
//
// // with params
// index.search(
//   {
//     query: 'query string',
//     attributesToRetrieve: ['firstname', 'lastname'],
//     hitsPerPage: 50,
//   },
//   function searchDone(err, content) {
//     if (err) {
//       console.error(err);
//       return;
//     }
//
//     for (var h in content.hits) {
//       console.log(
//         'Hit(' + content.hits[h].objectID + '): ' + content.hits[h].toString()
//       );
//     }
//   }
// );
// $(document).ready(function() {

  // Menu Settings
  // $('.menu-icon, .menu-icon-close').click(function(e) {
  //   e.preventDefault();
  //   $('.flex-container').toggleClass('active');
  // });

  // Search Settings
//   $('.search-icon').on('click', function(e){
//     e.preventDefault();
//     $('.search-box').toggleClass('search-active');
//
//     if ($('.search-box').hasClass('search-active')) {
//       $('.search-icon-close').on('click', function(e){
//   		e.preventDefault();
//   		$('.search-box').removeClass('search-active');
//   	});
//   }
//   });
//
// });
