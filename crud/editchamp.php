<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
		<?
			$conn=new mysqli("localhost","root","toortoor","cursotelematica");
			if($conn->connect_error)
			{
				die("Error de conexión a la base de datos".$conn->connect_error);
			}

			$result=$conn->query("Select * from champs where Ch_Id=".$_GET["Id"]);
			if($result->num_rows>0)
				{
					$row=$result->fetch_assoc();?>			
	<form method="post" action="savechamp.php">
		<label>Nombre: <input type="text" name="Nombre" maxlength="30" required value="<?echo $row["Ch_Nombre"]?>"></label><br>
		<label>Alias: <input type="text" name="Alias" maxlength="50" required value="<?echo $row["Ch_Alias"]?>"></label><br>
		<label>Alineacion: <input type="text" name="Alineacion" maxlength="30" required value="<?echo $row["Ch_Alineacion"]?>"></label><br>
		<label>Historia:<textarea name="Historia" cols="30" rows="8" required><?echo $row["Ch_Historia"]?></textarea></label><br>
		<input type="hidden" name="Id" value="<?echo $row["Ch_Id"]?>">
		<input type="submit" value="Modificar">
	</form>
<?}?>
</body>
</html>