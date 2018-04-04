"use strict";

function renderCoffee(coffee) {

    var html = '<div class="col-8 float-left w-25">';
    html += '<h2 class="d-inline">' + coffee.name + '</h2>';
    html += "<p class='text-muted d-inline'>" + coffee.roast + "</p>";
    var html = "<div id='myDiv' class='row col-6 float-left position-static'>";
    html += "<h2 class='d-inline-block'>" + coffee.name + "</h2>";
    html += "<p class='text-muted d-inline-block'>" + coffee.roast + "</p>";

    html += '</div>';

    return html
}
function myFunction(){
    var input, filter, ul, li, a, i;
    input = document.getElementById("#input-coffee");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("h2");
    for (i=0; i< li.length; i++){

    }

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
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
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
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');




tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
