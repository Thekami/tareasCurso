<?

	require('mysql.php');
	$db = new mysql();

	$Alineacion = $_POST['Alineacion'];
	$Historia = $_POST['Historia'];
	$Nombre = $_POST['Nombre'];
	$Alias = $_POST['Alias'];

	$consulta = "INSERT INTO champs VALUES(null, '$Nombre', '$Alias', '$Alineacion', '$Historia')";

	echo json_encode($db->query($consulta));

?>	