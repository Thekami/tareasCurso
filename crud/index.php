<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>CRUD</title>

	<style>
		table, td, th { 
		  border-collapse: collapse;
		  border: solid 1px; 
		}
		th{
			background-color: #dbdbdb;
		}
	</style>
</head>
<body>
	
	<table>
		<thead id="thead">
			
		</thead>
		<tbody id="tbody">
			
		</tbody>
	</table>
	
	<br>
	<hr>
	<br>

	<form method="post" id="form" action="addchamp.php">
		<input type="text" id="id" name="id" hidden>
		<label>Nombre: <input type="text" name="Nombre" id="Nombre"  maxlength="30" required></label><br>
		<label>Alias: <input type="text" name="Alias"  id="Alias"  maxlength="50" required></label><br>
		<label>Alineacion: <input type="text" name="Alineacion" id="Alineacion"  maxlength="30" required></label><br>
		<label>Historia:<textarea name="Historia" id="Historia" cols="30" rows="8" required></textarea></label><br>
		<input type="submit" class="btn_action" id="btn_save" value="Guardar">
	</form>
	

	<script src="js/jquery.min.js"></script>
	<script src="js/main.js"></script>
</body>
</html>