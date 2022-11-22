// Import the list of dictionaries from data.js
const projects = data;
// Grab the wrapper element from index.html
const parentWrapper = document.getElementById("projectList");

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
        newDiv.classList.add("col-sm-12");
        newDiv.classList.add("col-xs-12");

        // Create the anchor element to be the header
        anchor = document.createElement("a");
        anchor.href = data[i].projectURL;
        anchor.innerHTML = '<h3>'+data[i].name+'</h3>';

        // Create the h6 element to contain the description
        projectDescription = document.createElement("h6");
        projectDescription.innerHTML = data[i].description;
        
        // Create the paragraph element to contain the list of languages utilized
        projectLanguages = document.createElement("p");
        if (data[i].languages[0]) {
            projectLanguages.innerHTML = 'Languages Utilized: <b>' + data[i].languages[0] + '</b>';
            for (var j=1;j<data[i].languages.length;j++) {
                projectLanguages.innerHTML = projectLanguages.innerHTML + ' | <b>' + data[i].languages[j] + '</b>';
            }
        } else {
            projectLanguages.innerHTML = '';
        }


        // Create the paragraph element to contain the list of tools utilized
        projectTools = document.createElement("p");
        if (data[i].tools[0]) {
            projectTools.innerHTML = 'Tools Utilized: <b>' + data[i].tools[0] + '</b>';
            for (var j=1;j<data[i].tools.length;j++) {
                projectTools.innerHTML = projectTools.innerHTML + ' | <b>' + data[i].tools[j] + '</b>';
            }
        } else {
            projectTools.innerHTML = '';
        }


        // Create the paragraph element to contain the list of libraries utilized
        projectLibraries = document.createElement("p");
        if (data[i].libraries[0]) {
            projectLibraries.innerHTML = 'Libraries Utilized: <b>' + data[i].libraries[0] + '</b>';
            for (var j=1;j<data[i].libraries.length;j++) {
                projectLibraries.innerHTML = projectLibraries.innerHTML + ' | <b>' + data[i].libraries[j] + '</b>';
            }
        } else {
            projectLibraries.innerHTML = '';
        }

        //Append all new elements to the new div
        newDiv.append(anchor,projectDescription,projectLanguages,projectTools,projectLibraries);

        //Append the new div to the wrapper
        parentWrapper.appendChild(newDiv);
    }
}

