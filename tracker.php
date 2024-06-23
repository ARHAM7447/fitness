<?php
// Retrieve form data
$name = $_POST['name'];
$exercise = $_POST['exercise'];
$duration = $_POST['duration'];
$date = $_POST['date'];

// Database connection
$conn = new mysqli('localhost', 'root', '', 'signup');

// Check connection
if($conn->connect_error){
    die("Connection Failed : " . $conn->connect_error);
} else {
    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO tracker (name, exercise, duration, date) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssis", $name, $exercise, $duration, $date);

    // Execute the statement
    if($stmt->execute()) {
        echo "Workout saved successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the statement and connection
    $stmt->close();
    $conn->close();
}
?>
