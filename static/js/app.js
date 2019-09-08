// From data.js
var tableData = data;
// console.log(tableData);

// Get a reference to the table body.
var tbody = d3.select("tbody");

// Build Table Function.
function tablePop(data) {
    tbody.html("");
    // Use d3 to update each cell's text with UFO Sigthings Data.
    data.forEach(UFOSightings => {
        let row = tbody.append("tr");
        Object.values(UFOSightings).forEach((value) => {
            let cell = row.append("td");
            cell.text(value);
        });
    });
};

function handleClick(){

    // Prevent the form from refreshing the page.
    d3.event.preventDefault()
    
    // Select input element for raw html node.
    // Select the datetime property and set value to variable called dateInput.
    let dateInput = d3.select("#datetime").property("value");
    // console.log(dateInput);

    // Select input element for raw html node.
    // Select the city property and set value to variable called cityInput.
    let cityInput = d3.select("#city").property("value");

    // Select input element for raw html node.
    // Select the state property and set value to variable called stateInput.
    let stateInput = d3.select("#state").property("value");

    // Select input element for raw html node.
    // Select the country property and set value to variable called countryInput.
    let countryInput = d3.select("#country").property("value");

    // Select input element for raw html node.
    // Select the shape property and set value to variable called shapeInput.
    let shapeInput = d3.select("#shape").property("value");

    // Set new variable equal to tableData.
    var filterData = tableData;

    // Conditional to see if date was entered.
    if (dateInput){
        // Apply filter to the table data rows where the datetime value matches requested input value.
        filterData = filterData.filter((row) => row.datetime === dateInput)
        // console.log(filterData)
    }

    // Conditional to see if city was entered.
    if (cityInput){
        // Apply filter to the table data rows where the city value matches requested input value.
        filterData = filterData.filter((row) => row.city === cityInput)
    }
    
    // Conditional to see if state was entered.
    if (stateInput){
        // Apply filter to the table data rows where the state value matches requested input value.
        filterData = filterData.filter((row) => row.state === stateInput)
    }

    // Conditional to see if country was entered.
    if (countryInput){
        // Apply filter to the table data rows where the country value matches requested input value.
        filterData = filterData.filter((row) => row.country === countryInput)
    }

    // Conditional to see if state was entered.
    if (shapeInput){
        // Apply filter to the table data rows where the state value matches requested input value.
        filterData = filterData.filter((row) => row.shape === shapeInput)
    }

    tablePop(filterData);
    console.log(filterData);

};



d3.selectAll("#filter-btn").on("click", handleClick);

// Populate table data with unfiltered data.
tablePop(tableData);