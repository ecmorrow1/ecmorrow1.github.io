// Import the list of dictionaries from data.js
const projects = data;
// Grab the wrapper element from index.html
const parentWrapper = document.getElementById("projectList");

var newDiv;
var anchor;


for (var i = 0; i < data.length; i++) {

    // Only populate dictionaries that have a name identified
    if (data[i].name) {

        // Create a new div for each element of data.js
        newDiv = document.createElement("div");
        newDiv.classList.add("col-md-12");
        newDiv.classList.add("col-sm-12");
        newDiv.classList.add("col-xs-12");

        // Create the anchor element to be the header
        anchor = document.createElement("a");
        anchor.href = data[i].projectURL;

        // Create an h3 and h6 element to hold the project name and the description
        anchor.innerHTML = '<h3>' + data[i].name + '</h3><h6>' + data[i].description + '</h6>';
        
        // Add the list of languages to the anchor if there are any
        if (data[i].languages[0]) {
            anchor.innerHTML = anchor.innerHTML + 'Languages Utilized: <b>' + data[i].languages[0] + '</b>';
            for (var j=1;j<data[i].languages.length;j++) {
                anchor.innerHTML = anchor.innerHTML + ' | <b>' + data[i].languages[j] + '</b>';
            }
        }
        
        // Add the list of tools to the anchor if there are any
        if (data[i].tools[0]) {
            anchor.innerHTML = anchor.innerHTML + '<br><br>Tools Utilized: <b>' + data[i].tools[0] + '</b>';
            for (var j=1;j<data[i].tools;j++) {
                anchor.innerHTML = anchor.innerHTML + ' | <b>' + data[i].tools[j] + '</b>';
            }
        }
        
        // Add the list of libraries to the anchor if there are any
        if (data[i].libraries[0]) {
            anchor.innerHTML = anchor.innerHTML + '<br><br>Libraries Utilized: <b>' + data[i].libraries[0] + '</b>';
            for (var j=1;j<data[i].libraries.length;j++) {
                anchor.innerHTML = anchor.innerHTML + ' | <b>' + data[i].libraries[j] + '</b>';
            }
        }

        // append the anchor to the newDiv
        newDiv.append(anchor);

        //Append the new div to the wrapper
        parentWrapper.appendChild(newDiv);
    }
}

