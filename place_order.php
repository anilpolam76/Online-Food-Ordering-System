<?php
include 'db_connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $dish_id = $_POST["dish"];
    $quantity = $_POST["quantity"];

    $sql = "SELECT price FROM menu WHERE id = $dish_id";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);
    $price = $row["price"];

    $total_price = $price * $quantity;

    $sql = "INSERT INTO orders (dish_id, quantity, total_price) VALUES ('$dish_id', '$quantity', '$total_price')";
    if (mysqli_query($conn, $sql)) {
        header("Location: confirmation.php");
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}

mysqli_close($conn);
?>
