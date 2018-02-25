function showSection() {
    document.getElementById("hide").style.visibility = "visible";
    document.getElementById("hide").style.opacity = "1";
}

function alertbox() {
	alert("Hello! I am an alert box!");
}

function joke_response() {
	fetch('http://api.icndb.com/jokes/random')
	  .then(
	    function(response) {
	      if (response.status !== 200) {
	        console.log('Looks like there was a problem. Status Code: ' +
	          response.status);
	        return;
	      }

	      // Examine the text in the response
	      response.json().then(function(data) {
	        document.getElementById("joke").innerHTML = data.value.joke;

	      });
	    }
	  )
	  .catch(function(err) {
	    console.log('Fetch Error :-S', err);
	  });
}

function ajax_call(config) {

	const get_async_response = new Promise (function (resolve, reject)) {
		let xhttp = new XMLHttpRequest();
		xhttp.open(config.req_method, config.url, config.asynchronous);

		xhttp.onload = function() {
			if(xhttp.readyState == 4 && this.status == 200) {
				resolve(xhttp);
			} else {
				reject();
			}
		}

		xhttp.onerror = function() {
			show_error();
		}
	}

	return get_async_response;
}

function show_error() {
	document.getElementById("title").style.color = "red";
}