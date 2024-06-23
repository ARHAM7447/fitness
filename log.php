<?php
    $username = $_POST['username'];
    $password = $_POST['password'];
    $number = $_POST['number'];

    // Database connection
    $conn = new mysqli('localhost', 'root', '', 'signup');
    if($conn->connect_error){
        echo "$conn->connect_error";
        die("Connection Failed : " . $conn->connect_error);
    } else {
        
        $stmt = $conn->prepare("INSERT INTO loginpage (username, password, number) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $username, $password, $number); 
        $execval = $stmt->execute();
        if($execval) {
            echo "Registration successfully...";
        } else {
            echo "Registration failed: " . $stmt->error;
        }
        $stmt->close();
        $conn->close();
    }
?>

