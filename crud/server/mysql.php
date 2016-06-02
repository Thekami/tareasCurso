<?php 

class mysql{

var $dbCon;

	function __construct(){
		$this->conect();
	}

	public function conect(){
		$this->dbCon = new mysqli('localhost', 'root', 'toortoor', 'cursotelematica');
		$this->dbCon->set_charset("utf8");
		if(!$this->dbCon)
			echo $this->show_error();
	}

	public function query($consult){
		$query = $this->dbCon->query($consult);
		if(!$query){
			$this->show_error();
		}
		else{
			return $query;
		}
	}

	private function show_error(){
		return $this->dbCon->connect_error;
	}

	public function query_assoc($consult){
		$vec = array();
		if($result = $this->query($consult)){
			while($fila = $result->fetch_assoc()){ $vec[] = $fila; }
		}
		return $vec;
	}

	public function exit_conect(){
		mysqli_close($this->dbCon);
	}

	public function destroy(){
		session_destroy();
		header("Location: /index.php");
		// header("Location: /angel/rutas");
	}

	public function obtenerId(){
		return $this->dbCon->insert_id;
	}

	public function DateTime(){
		$time = date('H:i:s', time());
		$date = date('d-m-Y');
		return array($time, $date);
	}

 
}
?>