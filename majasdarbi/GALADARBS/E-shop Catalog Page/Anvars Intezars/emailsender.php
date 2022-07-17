<?php
if(isset($_POST['submit'])){
    $to = "anvar331@gmail.com";



    $productquantity = $_POST['productquantity'];
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $phone= $_POST['phonenumber'];
    $email= $_POST['email'];
    $address= $_POST['address'];
    $headers = 'From: '.$email . "\r\n";


    $body = "name : ".$name. "\r\n" .
    		"phonenumber : ".$phone. "\r\n";
    if(mail($to, $subject, $body , $headers)){
        echo "Mail Sent!";
    }else{
         echo "Failed To Send Mail";
    }
}

?>