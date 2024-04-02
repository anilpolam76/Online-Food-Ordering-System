<?php
include 'db_connection.php';

$sql = "SELECT * FROM orders ORDER BY order_date DESC LIMIT 1";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result);
    echo "<h1>Order Confirmation</h1>";
    echo "<p>Thank you for your order!</p>";
    echo "<p>Order ID: " . $row["id"] . "</p>";
    echo "<p>Dish: " . $row["dish_id"] . "</p>";
    echo "<p>Quantity: " . $row["quantity"] . "</p>";
    echo "<p>Total Price: $" . $row["total_price"] . "</p>";
} else {
    echo "<p>No orders found.</p>";
}

mysqli_close($conn);
?>
