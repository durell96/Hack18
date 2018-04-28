
  	<?php 
  	$name = $_POST['name'];
  	$comment = $_POST['comments'];
  	$phonenumber = $_POST['phone'];

  	$db = mysqli_connect("studentdb-maria.gl.umbc.edu","ds14","ds14","ds14");
  	if(mysqli_connect_errno())
  		exit("Error - could not connect");

  	$constructed_query = "INSERT INTO guestbook(username,comment_text,phone_number) VALUES ('$name','$comment','$phonenumber')";

  	$result = mysqli_query($db,$constructed_query);
  	?>
