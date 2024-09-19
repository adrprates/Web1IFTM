<?php
    include "Funcionario.php";

    $f = new Funcionario("Xafundifornio Stanislaw", 1200);
    echo "O funcionario " . $f->nome . " recebe " . $f->salario . "<br/><br/>";

    $f->aumentoSalario(500);
    echo "Novo salario " . $f->salario;
?>