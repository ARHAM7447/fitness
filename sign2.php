<?php
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $number = $_POST['number'];

    // Database connection
    $conn = new mysqli('localhost', 'root', '', 'signup');
    if($conn->connect_error){
        echo "$conn->connect_error";
        die("Connection Failed : " . $conn->connect_error);
    } else {
        // Prepare statement with the correct column names
        $stmt = $conn->prepare("INSERT INTO registration (username, email, password, number) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $username, $email, $password, $number); // Changed 'ssssi' to 'ssss' as the number is likely a string
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
