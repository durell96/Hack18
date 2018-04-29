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
        url: "php/dbconnection.php",
        dataType:'json',
        data:{details: args},
        success: function (){
          console.log('success')
        }
    });   

}

function populateTable() {
    var myTable = document.getElementById("sessions");
	$.ajax({
	url:'php/dbresult.php',
	type:'GET',
	dataType: "json",
	success: function(response){
	var data = response;
	console.log(data);
}
});
	
}

