if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js')
	.then(function() {
		console.log('Successful');
	})
	.catch(function() {
		console.log('Please try again!');
	});
}
