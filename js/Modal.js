// JavaScript source code
function sendToDatabase() {

    var classVar = document.forms["addingEvent"]["className"].value;
    var assignmentVar = document.forms["addingEvent"]["assignment"].value;
    var dateVar = document.forms["addingEvent"]["assignmentDate"].value;
    var timeVar = document.forms["addingEvent"]["assignmentTime"].value;
    timeVar = timeVar + ":00";
    var locationVar = document.forms["addingEvent"]["location"].value;
    var professorVar = document.forms["addingEvent"]["professor"].value;
    var descriptionVar = document.forms["addingEvent"]["description"].value;

    var args = [classVar,assignmentVar,dateVar, timeVar, locationVar, professorVar, descriptionVar];
    console.log(args);
    $.ajax({
        async: true,
        type: "POST",
        url: "dbconnection.php",
        dataType:'json',
        data:{ functionname: 'addEvent', arguments: args},
        success: function (obj, textstatus){
          if (!('error' in obj)){
            var prizeData = obj.result;
            populateTable();
          }
          else{
            console.log(obj.error);
          }
        }
    });   

}

function populateTable() {

    var myTable = document.getElementById("")



}