<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<table border="1">
		<thead><tr><th>Nombre<th>Alias<th>Alineacion</thead>
		<?
			$conn=new mysqli("localhost","root","toortoor","cursotelematica");
			if($conn->connect_error)
			{
				die("Error de conexión a la base de datos".$conn->connect_error);
			}

			$result=$conn->query("Select * from champs");
			if($result->num_rows>0)
				{
					while($row=$result->fetch_assoc())
					{
						echo "<tr><td>".$row["Ch_Nombre"]."<td>".$row["Ch_Alias"]."<td>".$row["Ch_Alineacion"]."<td><a href='editchamp.php?Id=".$row["Ch_Id"]."'>editar</a><td><a href='delchamp.php?Id=".$row["Ch_Id"]."'>eliminar</a>";
					}
					}?>
	</table>
	<br><br>
	<form method="post" action="addchamp.php">
		<label>Nombre: <input type="text" name="Nombre" id="Nombre"  maxlength="30" required></label><br>
		<label>Alias: <input type="text" name="Alias"  id="Alias"  maxlength="50" required></label><br>
		<label>Alineacion: <input type="text" name="Alineacion" id="Alineacion"  maxlength="30" required></label><br>
		<label>Historia:<textarea name="Historia" id="Historia" cols="30" rows="8" required></textarea></label><br>
		<input type="submit" value="Agregar">
	</form>


	<script src="js/jquery.min.js"></script>
	<script src="js/main.js"></script>
</body>
</html>