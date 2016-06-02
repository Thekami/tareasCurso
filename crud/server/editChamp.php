<?

	require('mysql.php');
	$db = new mysql();

	$Alineacion = $_POST['Alineacion'];
	$Historia = $_POST['Historia'];
	$Nombre = $_POST['Nombre'];
	$Alias = $_POST['Alias'];
	$id = $_POST['id'];

	$consulta = "UPDATE champs SET Ch_Nombre = '$Nombre', Ch_Alias = '$Alias', Ch_Alineacion = '".$Alineacion."', Ch_Historia = '$Historia'
				WHERE Ch_Id = $id";

				// echo $consulta;

	echo json_encode($db->query($consulta));

?>	