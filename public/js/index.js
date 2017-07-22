var socket = io();

		socket.on('connect',function () {
			console.log('Connect to the server')
		
			
		});

		socket.on('disconnect', function()  {
				console.log('disconnect from the server')		
			});

	socket.on('newMessage', function(message) {
		console.log('New Message', message);
	});