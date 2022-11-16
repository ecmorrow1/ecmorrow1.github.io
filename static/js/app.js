// Import the list of dictionaries from data.js
const projects = data;
// Grab the wrapper element from index.html
const parent = document.getElementById("projectList");

var newDiv;
var anchor;
var projectDescription;
var projectLanguages;
var projectTools;
var projectLibraries;


for (var i = 0; i < data.length; i++) {

    // Only populate dictionaries that have a name identified
    if (data[i].name) {

        // Create a new div for each element of data.js
        newDiv = document.createElement("div");
        newDiv.classList.add("col-md-12");

        // Create the anchor element to be the header
        anchor = document.createElement("a");
        anchor.href = data[i].projectURL;
        anchor.innerHTML = '<h3>'+data[i].name+'</h3>';

        // Create the h6 element to contain the description
        projectDescription = document.createElement("h6");
        projectDescription.textContent = data[i].description;
        
        // Create the h7 element to contain the list of languages utilized
        projectLanguages = document.createElement("h7");
        if (data[i].languages) {
            projectLanguages.textContent = 'Languages Utilized: ' + data[i].languages;
        } else {
            projectLanguages.textContent = "";
        }

        // Create the h7 element to contain the list of tools utilized
        projectTools = document.createElement("h7");
        if (data[i].tools) {
            projectTools.textContent = 'Tools Utilized: ' + data[i].tools;
        } else {
            projectTools.textContent = "";
        }

        // Create the h7 element to contain the list of libraries utilized
        projectLibraries = document.createElement("h7");
        if (data[i].libraries) {
            projectLibraries.textContent = 'Libraries Utilized: ' + data[i].libraries;
        } else {
            projectLibraries.textContent = "";
        }

        //Append all new elements to the new div
        newDiv.append(anchor,projectDescription,projectLanguages,projectTools,projectLibraries);

        //Append the new div to the wrapper
        parent.appendChild(newDiv);
    }
}

