<?php

class TresNumeros {
   private $num_1 = 0;
   private $num_2 = 0;
   private $num_3 = 0;

   function get_num_1() {
      return $this->num_1;
   }

   function get_num_2() {
      return $this->num_2;
   }

   function get_num_3() {
      return $this->num_3;
   }

   function set_num_1($valor) {
      $this->num_1 = $valor;
   }

   function set_num_2($valor) {
      $this->num_2 = $valor;
   }

   function set_num_3($valor) {
      $this->num_3 = $valor;
   }

   function multiple() {
      $result = $this->num_1 * $this->num_2 * $this->num_3;
      echo $result."\n";
   }
}

$obj = new TresNumeros();

$obj->set_num_1(4);
$obj->set_num_2(2);
$obj->set_num_3(5);


echo "1: ".$obj->get_num_1()."\n";
echo "2: ".$obj->get_num_2()."\n";
echo "3: ".$obj->get_num_3()."\n";

$obj->multiple();

?>
