<?php 
  	$test = array("Psych", "EXAM2","2018-04-26", "10:00:00","ENG","GROUCH","STUDY PLEASE");

	function addEvent($event) {
	$db = mysqli_connect("studentdb-maria.gl.umbc.edu","ds14","ds14","ds14");
  	if(mysqli_connect_errno()){
	exit("Error - could not connect");
	}
    $constructed_query = "INSERT INTO studyevent(class,assignments,date,time,location,professor,description) VALUES ('$event[0]','$event[1]','$event[2]','$event[3]','$event[4]','$event[5]','$event[6]')";
	$result = mysqli_query($db,$constructed_query);
	mysqli_close($db);
	} 
	
	
	function selectEvent() {
	$db = mysqli_connect("studentdb-maria.gl.umbc.edu","ds14","ds14","ds14");
  	if(mysqli_connect_errno()){
	exit("Error - could not connect");
	}
    $constructed_query = "SELECT * FROM studyevent";
	$result = mysqli_query($db,$constructed_query);
	$eventlist = array();
	while($row = $result -> fetch_assoc())
	{
		$eventlist[] = $row;
		
	}
	
	
	mysqli_close($db);
	return json_encode($eventlist);
	} 
	selectEvent();
  	?>
