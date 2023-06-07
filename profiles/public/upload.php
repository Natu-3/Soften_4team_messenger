<?php
$source=$_FILES['profilePicture']['tmp_name'];
$dest="./".basename($_FILES['profilePicture']['name']);
move_uploaded_file($source, $dest);
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
</head>
<body>
    <img src="<?$_FILES['profilePicture']['name']?>"alt=""/>
</body>
</html>