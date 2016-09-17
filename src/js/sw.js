//sw.js

self.addEventListener('install', function(event) {
	//activate immediately
	self.skipWaiting();
});

self.addEventListener("activate", function(event) {
	console.log('activated', event);

	caches.open('abcdev-2016-v1').then(function(cache) {
	  return cache.addAll([
      '../',
      '../index.html',
      '../obrigado.html',
      '../codigo-de-conduta.html',
      '../css/reset.min.css',
      '../css/style.min.css',
      '../js/app.js',
      '../js/app.js.map',
      '../js/vendors/smooth-scroll.min.js',
      '../images/abc-dev-org-logo.png',
      '../images/abc-hacker-clube-logo.png',
      '../images/abcdev-horizontal-logo.png',
      '../images/abcdev-horizontal-logo.svg',
      '../images/abcdev-logo.png',
      '../images/abcdev-logo.svg',
      '../images/abcdev-yellow-logo.png',
      '../images/abcdev-yellow-logo.svg',
      '../images/alda-rocha.jpg',
      '../images/alura-logo.png',
      '../images/alura-logo.svg',
      '../images/avatar.jpg',
      '../images/avatar1.jpg',
      '../images/avatar12.jpg',
      '../images/avatar2.jpg',
      '../images/avatar3.jpg',
      '../images/avatar4.jpg',
      '../images/avatar5.jpg',
      '../images/avatar5.png',
      '../images/avatar6.jpg',
      '../images/braziljs-logo.png',
      '../images/braziljs.svg',
      '../images/carlos-maniero.jpg',
      '../images/close.svg',
      '../images/eduardo-matos.jpg',
      '../images/facebook-icon.svg',
      '../images/favicon.png',
      '../images/femug-abc-logo.png',
      '../images/francisco-isidro-massetto.jpg',
      '../images/front-ladies-abc-logo.png',
      '../images/gdg-abc-logo.png',
      '../images/github-icon.svg',
      '../images/global-code-logo.png',
      '../images/gustavo-fernandes.jpg',
      '../images/hamburger.svg',
      '../images/hewlett-packard-logo.png',
      '../images/ibm-logo.png',
      '../images/igreja-matriz-sbc.jpg',
      '../images/luiz-fernando-zizaco.jpg',
      '../images/maps.jpg',
      '../images/maps.png',
      '../images/marco-bruno.jpg',
      '../images/midia-performa-logo.png',
      '../images/novatec-logo.png',
      '../images/paloma-costa-javawoman.jpg',
      '../images/papo-de-sysadmin-logo.png',
      '../images/parque-chico-mendes-scs.jpg',
      '../images/parque-dos-menimos-sbc.jpg',
      '../images/parque-escola-sabina-sto-andre.jpg',
      '../images/praca-da-moca-diadema.jpg',
      '../images/ravan-scafi.jpg',
      '../images/red-hat-logo.png',
      '../images/rivendel-logo.png',
      '../images/seja-um-patrocinador-bronze.png',
      '../images/seja-um-patrocinador-gold.png',
      '../images/seja-um-patrocinador-silver.png',
      '../images/strong-security-logo.png',
      '../images/tools-cloud-logo.png',
      '../images/twitter-icon.svg',
      '../fonts/antonio/antonio-bold-webfont.eot',
      '../fonts/antonio/antonio-bold-webfont.svg',
      '../fonts/antonio/antonio-bold-webfont.ttf',
      '../fonts/antonio/antonio-bold-webfont.woff',
      '../fonts/antonio/antonio-bold-webfont.woff2',
      '../fonts/antonio/antonio-light-webfont.eot',
      '../fonts/antonio/antonio-light-webfont.svg',
      '../fonts/antonio/antonio-light-webfont.ttf',
      '../fonts/antonio/antonio-light-webfont.woff',
      '../fonts/antonio/antonio-light-webfont.woff2',
      '../fonts/antonio/antonio-regular-webfont.eot',
      '../fonts/antonio/antonio-regular-webfont.svg',
      '../fonts/antonio/antonio-regular-webfont.ttf',
      '../fonts/antonio/antonio-regular-webfont.woff',
      '../fonts/antonio/antonio-regular-webfont.woff2',
      '../fonts/open-sans/opensans-bold-webfont.eot',
      '../fonts/open-sans/opensans-bold-webfont.svg',
      '../fonts/open-sans/opensans-bold-webfont.ttf',
      '../fonts/open-sans/opensans-bold-webfont.woff',
      '../fonts/open-sans/opensans-bold-webfont.woff2',
      '../fonts/open-sans/opensans-bolditalic-webfont.eot',
      '../fonts/open-sans/opensans-bolditalic-webfont.svg',
      '../fonts/open-sans/opensans-bolditalic-webfont.ttf',
      '../fonts/open-sans/opensans-bolditalic-webfont.woff',
      '../fonts/open-sans/opensans-bolditalic-webfont.woff2',
      '../fonts/open-sans/opensans-italic-webfont.eot',
      '../fonts/open-sans/opensans-italic-webfont.svg',
      '../fonts/open-sans/opensans-italic-webfont.ttf',
      '../fonts/open-sans/opensans-italic-webfont.woff',
      '../fonts/open-sans/opensans-italic-webfont.woff2',
      '../fonts/open-sans/opensans-regular-webfont.eot',
      '../fonts/open-sans/opensans-regular-webfont.svg',
      '../fonts/open-sans/opensans-regular-webfont.ttf',
      '../fonts/open-sans/opensans-regular-webfont.woff',
      '../fonts/open-sans/opensans-regular-webfont.woff2',
      '../fonts/open-sans/opensans-semibold-webfont.eot',
      '../fonts/open-sans/opensans-semibold-webfont.svg',
      '../fonts/open-sans/opensans-semibold-webfont.ttf',
      '../fonts/open-sans/opensans-semibold-webfont.woff',
      '../fonts/open-sans/opensans-semibold-webfont.woff2',
      '../fonts/open-sans/opensans-semibolditalic-webfont.eot',
      '../fonts/open-sans/opensans-semibolditalic-webfont.svg',
      '../fonts/open-sans/opensans-semibolditalic-webfont.ttf',
      '../fonts/open-sans/opensans-semibolditalic-webfont.woff',
      '../fonts/open-sans/opensans-semibolditalic-webfont.woff2',
	  ]);
	});
});

self.addEventListener("fetch", function(event) {
	console.log('Fech received request URL =>', event.request.url);

	event.respondWith(
    caches.match(event.request).then(function(response) {
			if (!response) return null;

			var URL = response.url;

			if (!URL) return response;

			if ( !URL.match(/sw.js/g) && URL.match(location.host) ) {
				caches.open('abcdev-2016-v1').then(function(cache) {
					return cache.put(event.request, response.clone());
				});
			}

			return response || fetch(event.request);
		}).catch(function(err) {
			console.error(err);
		})
  );
});
