<?php

	$db = mysqli_connect("studentdb-maria.gl.umbc.edu","ds14","ds14","ds14");
  	if(mysqli_connect_errno()){
	exit("Error - could not connect");
	}
    $constructed_query = "SELECT * FROM studyevent";
	$result = mysqli_query($db,$constructed_query);
	$eventlist = array();
	while($row = mysqli_fetch_assoc($result))
	{
		$eventlist[] = $row;
		
	}


	echo json_encode($eventlist);
	mysqli_close($db);
	

?>