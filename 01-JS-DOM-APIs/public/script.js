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

	const get_async_response = new Promise (function (resolve, reject) {
		let xhttp = new XMLHttpRequest();
		xhttp.open(config.req_method, config.url, config.asynchronous);

		xhttp.onload = function() {
			if(xhttp.readyState == 4 && xhttp.status == 200) {
				resolve(xhttp);
			} else {
				reject();
			}
		}

		xhttp.onerror = function() {
			show_error();
		}

		xhttp.send();
	});

	return get_async_response;
}

function show_error() {
	document.getElementById("title").style.color = "red";
}

// EXCERCISE 4

let repos_list;

function get_repos() {
	const config = {
		req_method: "GET",
		url: "https://api.github.com/search/repositories?q=javascript",
		asynchronous: true
	};

	let response = this.ajax_call(config);

	response.then(function(content) {

		document.getElementsByClassName("sidebar")[0].style.visibility = "visible";
		let list = JSON.parse(content.response);
		this.repos_list = list.items;
		this.display_list(this.repos_list);
	})
}

function repos_filter(){
	if (this.repos_list) {
		let input_repo_filter = document.getElementById("repofilter").value;
		let filtered_response = this.filter_list(input_repo_filter, this.repos_list);
		this.display_list(filtered_response);
	}
}

function filter_list(input, list) { //filters the given list by input
  return list.filter(function(l) {
      return l.owner.login.toLowerCase().indexOf(input.toLowerCase()) > -1;
  })
}

function display_list(list) {
	this.empty_list();
	if(list.length){
		for (let i = 0; list.length > i; i++) {
			let li = document.createElement("LI");
			let text = document.createTextNode(list[i].owner.login);
			li.appendChild(text);
			document.getElementById("displaylist").appendChild(li);
		}
	} else {
		let li = document.createElement("LI");
		let text = document.createTextNode("No repositories found");
		li.appendChild(text);
		document.getElementById("displaylist").appendChild(li);
	}
}

function empty_list() {
	let list = document.getElementById("displaylist");
	list.innerHTML = '';
}

// EXCERCISE 6
function display_matrix(){
	let matris = [
		[ "Lisandro", "Cooper", 1 ],
		[ "GG", "Allin", 2 ],
		[ "Seth", "Putnam", 3 ],
		[ "Martin", "El seductor", 4 ],
		[ "Discordance", "Axis", 5 ],
		[ "Local", "Burned", 6 ],
	];
	this.forreal_display_matrix(matris);
}

function forreal_display_matrix(matrix) {

	let table = document.getElementById("matrix");
	for (let i_row = 0; matrix.length > i_row; i_row++) {
		//let table_row = document.createElement("TR");
		let t_row = table.insertRow(i_row);

		for (let i_column = 0; matrix[i_row].length > i_column; i_column++) {
			//let table_data = document.createElement("TD");
			//let column_data = document.createTextNode(matrix[row][column]);
			//table_data.appendChild(column_data);

			//table_row.appendChild(table_data);

			let cell = t_row.insertCell(i_column);
			cell.innerHTML = matrix[i_row][i_column];
		}
	}
}