<?

	require('mysql.php');
	$db = new mysql();

	$id = $_POST['id'];

	$consulta = "DELETE FROM champs WHERE Ch_Id = $id";
	echo json_encode($db->query($consulta));

?>	