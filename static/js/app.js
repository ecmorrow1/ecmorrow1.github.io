// import the dictionary from data.js
const projects = data;
const parent = document.getElementById("projectList");

var newDiv;
var anchor;
var projectDescription;
var projectlanguages;
var projectTools;
var projectLibraries;


for (var i = 0; i < data.length; i++) {
    //Create a new div for each element of data.js
    newDiv = document.createElement("div");
    newDiv.classList.add("col-md-12");

    // Create the anchor element to be the header
    anchor = document.createElement("a");
    anchor.href = data[i].projectURL;
    anchor.innerHTML = '<h3>'+data[i].name+'</h3>';

    //Create the paragraph element to contain the description
    projectDescription = document.createElement("p");
    projectDescription.textContent = data[i].description;

    //Create the paragraph element to contain the list of languages utilized
    projectlanguages = document.createElement("p")
    projectlanguages.textContent = 'Languages Utilized: ' + data[i].languages;

    //Create the paragraph element to contain the list of tools utilized
    projectTools = document.createElement("p")
    projectTools.textContent = 'Tools Utilized: ' + data[i].tools;

    //Create the paragraph element to contain the list of libraries utilized
    projectLibraries = document.createElement("p")
    projectLibraries.textContent = 'Libraries Utilized: ' + data[i].libraries;

    //Append all new elements to the new div
    newDiv.append(anchor,projectDescription,projectlanguages,projectTools,projectLibraries);

    //Append the new div to the wrapper
    parent.appendChild(newDiv);
}

