<?php
include 'db_connection.php';

$sql = "SELECT * FROM menu";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        echo "<option value='" . $row["id"] . "'>" . $row["dish_name"] . " - $" . $row["price"] . "</option>";
    }
} else {
    echo "<option value=''>No dishes available</option>";
}

mysqli_close($conn);
?>
