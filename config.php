<?php
// Here change variables with your own settings
$mysqlhost='localhost';
$mysqlusername='root';
$mysqlpassword=''; 
$mysqldb='admin';
$conn=mysqli_connect($mysqlhost,$mysqlusername,$mysqlpassword,$mysqldb);
echo "server connected";

?>