// JavaScript source code
function openCreateSession(){

    jQuery.noConflict();
    console.log("Opening the modal");
    $("#myModal").modal('show');

}

function addEvent() {
    var classRegex = /[A-Z]{2,4}[0-9]{3}/i;
    var classVariable = document.forms["addingEvent"]["class"].value;
    classVariable = classVariable.toUpperCase();
    classVariable = classVariable.replace(/ /g,'');
    console.log(classVariable)
    if (!classRegex.test(classVariable)){
        alert("Invalid")
    }

}