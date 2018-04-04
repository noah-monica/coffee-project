"use strict";

function renderCoffee(coffee) {
    var html = "<div id='myDiv' class='row col-6 float-left position-static'>";
    html += "<h2 class='d-inline-block text-dark'>" + coffee.name + "</h2>";
    html += "<p class='text-light d-inline-block mt-2 ml-2 font-weight-bold'>" + coffee.roast + "</p>";
    html += '</div>';

    return html
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    if (selectedRoast === 'all'){
        filteredCoffees = coffees
    } else {
        coffees.forEach(function (coffee) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
        });
    }
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function keyupCoffee(){
    var input = document.getElementById("input-coffee");
    var filter = input.value.toUpperCase();
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if(coffee.name.toUpperCase().indexOf(filter) > -1) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'}


];
//
function createCoffee(){
var roastSearch =  document.querySelector("#roast-search").value;
var coffeeA = document.querySelector("#coffee-array").value;
    coffees.push({name: coffeeA, roast: roastSearch});
    tbody.innerHTML = renderCoffees(coffees);
}
// createCoffee(coffeeA, roastSearch);


var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var submitCoffee = document.querySelector('#submit-coffee');
var roastSelection = document.querySelector('#roast-selection');
var filterCoffee = document.querySelector("#input-coffee");

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener('change', updateCoffees);
filterCoffee.addEventListener('keyup', keyupCoffee);
submitCoffee.addEventListener('click', createCoffee);

