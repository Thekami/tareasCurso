<?
	$conn=new mysqli("localhost","root","toortoor","cursotelematica");
	if($conn->connect_error)
	{
		die("Error de conexión a la base de datos".$conn->connect_error);
	}

	if($conn->query("Insert into champs (Ch_Nombre,Ch_Alias,Ch_Alineacion,Ch_Historia) values ('".$_POST["Nombre"]."','".$_POST["Alias"]."','".$_POST["Alineacion"]."','".$_POST["Historia"]."')"))
			{
				$conn->close();
				header("location:lista.php");
			}
	else
		echo $conn->error;
	$conn->close();
	?>