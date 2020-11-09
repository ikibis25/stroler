<?php
	$fname = $_POST['first_name'];
	$phone = $_POST['phone_number'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	
	$to = "jinhi.mehta@himanshusofttech.com";
	$subject = "stoller responsive template";
	$msg="Hi Admin..<p>".$fname." has sent a query. User's Phone No ".$phone." email id as ".$email." and The users Query is : ".$message."</p>";
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
	$headers .= 'From: <support@painter.com>' . "\r\n";
 
	echo mail($to,$subject,$msg,$headers);
?>