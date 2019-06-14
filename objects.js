names = [];
function addName(){
nameDetails = document.getElementById("names").value;    
    names.push(nameDetails);
    showNames();
}

function showNames(){
    document.getElementById('showArray').innerHTML = names;
}

function deleteName(){
nameDetails = document.getElementById("names").value;
    names.splice(nameDetails,1);
    // alert("Element deleted");
    showNames();
}
