<?
	$conn=new mysqli("localhost","root","toortoor","cursotelematica");
	if($conn->connect_error)
	{
		die("Error de conexión a la base de datos".$conn->connect_error);
	}

	if($conn->query("Update champs set Ch_Nombre='".$_POST["Nombre"]."',Ch_Alias='".$_POST["Alias"]."',Ch_Alineacion='".$_POST["Alineacion"]."',Ch_Historia='".$_POST["Historia"]."' where Ch_Id=".$_POST["Id"]))
			{
				$conn->close();
				header("location:lista.php");
			}
	else
		echo $conn->error;
	$conn->close();
	?>