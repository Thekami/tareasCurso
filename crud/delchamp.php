<?
	$conn=new mysqli("localhost","root","toortoor","cursotelematica");
	if($conn->connect_error)
	{
		die("Error de conexión a la base de datos".$conn->connect_error);
	}

	if($result=$conn->query("Delete from champs where Ch_Id=".$_GET["Id"]))
			{
				$conn->close();
				header("location:lista.php");
			}
	else
		echo $conn->error;
?>